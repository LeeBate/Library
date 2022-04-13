export interface IBaseUser {
    uname: string;
    ubook: string;
    age: number | string;
    uid: number | string;
  }
  export interface IUser extends IBaseUser {
    
    id:number;
  }
  