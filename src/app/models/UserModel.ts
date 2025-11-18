export class UserModel {
    name: string = "";
    email: string = "";
    phone: string = "";
    chainName: string = "";
    
    constructor(name:string,email:string,phone:string,chainName:string) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.chainName = chainName;
    }
  }