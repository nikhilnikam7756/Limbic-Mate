export class UserChainModel {
    data: string = "";
    hash: string = "";
    prevHash: string = "";
    nonce: number = 0;
    timeStamp: string = "";
  
    constructor(data: string,hash:string,prevHash:string,nonce:number,timeStamp:string) {
      this.data = data;
      this.hash = hash,
      this.prevHash = prevHash,
      this.nonce = nonce
      this.timeStamp = timeStamp
    }
  }