import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyCxth406qjaFkr2i7tgpzK4Pf_VTwfk_kY",
  
    authDomain: "twitter-demo-dd586.firebaseapp.com",
  
    projectId: "twitter-demo-dd586",
  
    storageBucket: "twitter-demo-dd586.appspot.com",
  
    messagingSenderId: "276402906414",
  
    appId: "1:276402906414:web:e7c453a377de3e65a4c6bf"
  
  };
  
// initialise firebase 
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db,storage};