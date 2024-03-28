
import { initializeApp } from "firebase/app";

import{getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAoyJ--BRj-lU6wg_-Hi2T8wk4uw2PoXs8",
  authDomain: "tatoobd-48507.firebaseapp.com",
  projectId: "tatoobd-48507",
  storageBucket: "tatoobd-48507.appspot.com",
  messagingSenderId: "951324481449",
  appId: "1:951324481449:web:a087839495d93e22f796b8"
};


const app = initializeApp(firebaseConfig);

export const db =  getFirestore(app)