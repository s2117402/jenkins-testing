export interface ResponseWithJWT {
   status: boolean;
   username:string;
   token:string;
}


export interface ResponseOfAuthenticatingJWT {
  status: string;
  role: string;
}
