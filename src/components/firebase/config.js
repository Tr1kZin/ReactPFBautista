
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDyZOYnR_sQGGzoFTHA68Zp74uZlSET2Fg",
  authDomain: "codercaps.firebaseapp.com",
  projectId: "codercaps",
  storageBucket: "codercaps.appspot.com",
  messagingSenderId: "146626704339",
  appId: "1:146626704339:web:caa2dc8f5d6b176f1ab526"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);