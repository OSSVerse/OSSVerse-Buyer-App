import { HttpService } from "@nestjs/axios";
import { Injectable, NestMiddleware } from "@nestjs/common";
import * as firbaseConfig from "../../resources/firebase_config_dev.json";

import * as firebase from 'firebase-admin'

const firebase_params={
    type:firbaseConfig.type,
    projectId:firbaseConfig.project_id,
    privateKeyId:firbaseConfig.private_key_id,
    privateKey:firbaseConfig.private_key,
    clientEmail:firbaseConfig.client_email,
    clientId:firbaseConfig.client_id,
    authUri:firbaseConfig.auth_uri,
    tokenUri:firbaseConfig.token_uri,
    authProviderX509CertUrl:firbaseConfig.auth_provider_x509_cert_url,
    clientX509CertUrl:firbaseConfig.client_x509_cert_url
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