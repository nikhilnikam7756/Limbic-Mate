export class MasterChainModel {
    chainId: string = "";
    description: string = "";
    name: string = "";
    status: boolean = false;
    associatedTo : string  = "";



    constructor(chainId: string,description:string,name:string,status:boolean,associatedTo:string) {
      this.chainId = chainId;
      this.description = description,
      this.name = name,
      this.status = status
      this.associatedTo = associatedTo
    }
  }