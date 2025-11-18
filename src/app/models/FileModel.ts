export class FileModel {
    fileSize: string = "";
    fileName: string = "";
    downloadUrl: string = "";
    lastModified: string = "";
    key:string = "";
  
    constructor(fileSize:string,fileName:string,downloadUrl:string,lastModified:string,key:string) {
      this.fileSize = fileSize;
      this.fileName = fileName;
      this.downloadUrl = downloadUrl;
      this.lastModified = lastModified;
      this.key = key;
    }
  }