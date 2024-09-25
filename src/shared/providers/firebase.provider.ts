import { HttpService } from "@nestjs/axios";
import { Injectable, NestMiddleware } from "@nestjs/common";
// import * as firbaseConfig from "../../resources/firebase_config_dev.json";

import * as firebase from 'firebase-admin'

const firebase_params={
    type:'',
    projectId:'',
    privateKeyId:'',
    privateKey:'',
    clientEmail:'',
    clientId:'',
    authUri:'',
    tokenUri:'',
    authProviderX509CertUrl:'',
    clientX509CertUrl:''
  }

@Injectable()
export class FirebaseAuthenticationService {
    private defaultApp: any;

  constructor() {
   this.defaultApp=firebase.initializeApp({
    credential:firebase.credential.cert(firebase_params),
    databaseURL:""
   })
  }

  async validateToken(token: String){
    try {
        if(token!= null && token!=''){
        let decodedToken = await this.defaultApp
            .auth()
            .verifyIdToken(token)
            return decodedToken ? true : false;     
        } else 
        return false;
    } catch (error) {
      throw error
    } 
  }
}