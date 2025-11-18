import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, DocumentData } from './../../../node_modules/@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../models/FileUpload.';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { Observable, Subscriber, finalize, never } from 'rxjs';
import { th } from 'date-fns/locale';
import { format } from 'date-fns';
import { CryptoBlock } from '../models/CryptoBlock';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConfigService {
  private basePath = '/uploads';
  filesListObservable!:Observable<any>;

  constructor(
    public firestore:AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router,
    public db:AngularFireDatabase,
    ) { }

  getUserEmail(){
    var userEmail = sessionStorage.getItem("user");
    console.log("UserEmail:"+userEmail);
  }

  async registerUserInDb(registrationMap:any){
    await this.firestore.collection('Users').doc(registrationMap["email"]).set(registrationMap);
    let chainInitialData = "NEW CHAIN CREATION . Registered User : "+registrationMap["email"]
    let initialCryptoBlock = new CryptoBlock("#",0,chainInitialData,this.getCurrentDate());
    this.addNewChain(initialCryptoBlock,`${registrationMap['name']}#${registrationMap['email']}`,"Basic user chain created for tracing operations and logging",`chain_id#${this.getCurrentDate()}`)
  }

  async fileUpload(fielUploadObj:FileUpload):Promise<Observable<number | undefined>>{
    var userEmail = sessionStorage.getItem("user");
    const filePath = `${this.basePath}/${userEmail?.toString()}/${fielUploadObj.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fielUploadObj.file);
    
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fielUploadObj.url = downloadURL;
          fielUploadObj.name = fielUploadObj.file.name;
          this.saveUploadFileDetails(fielUploadObj);
        });
      })
    ).subscribe();
    
        
    return uploadTask.percentageChanges();
    // return new Observable<number | undefined>(uploadTask.percentageChanges());

  }
  getCurrentDate(): string {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');
    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  }

  saveUploadFileDetails(fielUploadObj:FileUpload){
    var userEmail = sessionStorage.getItem("user");
  
    
    const currentDate = this.getCurrentDate();
    console.log(currentDate); // Output: "28-05
    console.log(currentDate);
    let fileStorageMap = {
      "lastModified":currentDate,
      "fileName":fielUploadObj.name,
      "fileSize":fielUploadObj.file.size.toString(),
      "downloadUrl":fielUploadObj.url,
      "key":fielUploadObj.key
    }
    this.firestore.collection("Users").doc(userEmail?.toString()).collection("files").doc(currentDate.toString()).set(fileStorageMap);
  }
  
   getFiles():Observable<any> {
    var userEmail = sessionStorage.getItem("user");
    let basePath = `Users/${userEmail}/files`
    return this.firestore.collection("Users").doc(userEmail?.toString()).collection("files").valueChanges();
  }
  
  addLog(entry:string){
    var userEmail = sessionStorage.getItem("user");
    
    let logsList:String[] = [];
    this.firestore.collection("Users").doc(userEmail?.toString()).get().subscribe(data=>{
      var recvdData = JSON.parse(JSON.stringify(data.data(),this.getCircularReplacer() ));
      // console.log("GET DOC"+JSON.stringify(recvdData["log"]))
      let logsList = recvdData["log"]as String[];  
      console.log("Doc list"+logsList+"Length:"+logsList.length)
      const currentDate = this.getCurrentDate();
      let logEntry = `[${currentDate}] [${userEmail?.toString()}] ------ ${entry.toString()}`
      logsList.push(logEntry);
      this.firestore.collection("Users").doc(userEmail?.toString()).update({"log":logsList})
    })
    
  }
  
  async addNewChain(
    initialCryptoBlock:CryptoBlock,
    chainName:string,
    description:string,
    chainId:string,
    ){

    var initialMap = {
      "chainId":chainId,
      "description":description,
      "name":chainName,
      "associatedTo":"NA",
      "status":"active",
    }; 
    var cryptoData = {
      "data":initialCryptoBlock.data,
      "hash":initialCryptoBlock.hash,
      "prevHash":initialCryptoBlock.prevHash,
      "nonce":initialCryptoBlock.nonce,
      "timestamp":initialCryptoBlock.timeStamp,
    }; 
    var userEmail = sessionStorage.getItem("user");

    await this.firestore.collection('BlockChains').doc(chainName).set(initialMap).then(async()=>{
    await this.firestore.collection('Users').doc(userEmail?.toString()).collection('chain').doc("0").set(cryptoData);
    });
  }
  
  getUsers():Observable<any> {
    return this.firestore.collection("Users").valueChanges();
  }

  getMasterBlockChain():Observable<any> {
    return this.firestore.collection("BlockChains").valueChanges();
  }

  getUserBlockChain(email:string):Observable<any> {
    return this.firestore.collection("Users").doc(email.toString()).collection("chain").valueChanges();
  }

  async getLogs(userEmail:string):Promise<Observable<any>>{
    let logsList:Array<string> = [];
    return this.firestore.collection("Users").doc(userEmail.toString()).valueChanges();
  }


  async getLatestChainIndex(userEmail:string):Promise<number> {
    let chainListLength:number = 0;
    this.firestore.collection('Users').doc(userEmail).collection('chain').get().subscribe(data=>{
      chainListLength = data.docs.length
      console.log("ChainLength:"+chainListLength)
    })
    // await this.firestore.collection('Users').doc(userEmail).collection('chain').get().toPromise().then((snap)=>{
    //   console.log(snap.docs.length);
    //   chainListLength = snap.docs.length;
    // });
    console.log("CHAIN LIST LENGTH:"+chainListLength);
    return new Promise(function(resolve) {
      resolve(chainListLength);
    });
  }

  updateChain(dataToUpdateInChain:string){
    
    
    // var cryptoData = {
    //   "data":initialCryptoBlock.data,
    //   "hash":initialCryptoBlock.hash,
    //   // "prevHash":initialCryptoBlock.prevHash,
    //   // "nonce":initialCryptoBlock.nonce,
    //   // "timestamp":initialCryptoBlock.timeStamp,
    // };

    
  }

  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key:string, value:any) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
}
