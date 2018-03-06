export interface ResponseWithJWT {
   status: boolean;
   username:string;
   token:string;
}


export interface ResponseOfJWTCheck {
  status: string;
  role: string;
}
