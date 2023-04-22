import * as firebase from "firebase/app";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";
import { 
  getDatabase, 
  ref, 
  onValue, 
  set
} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAlJB-xFStR7P4bRgDKaqmf4ieybdmu8Rw",
  authDomain: "saman-shopping.firebaseapp.com",
  projectId: "saman-shopping",
  storageBucket: "saman-shopping.appspot.com",
  messagingSenderId: "621035079842",
  appId: "1:621035079842:web:f1103876ac29d2a745affb"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
let auth= getAuth(firebaseApp);
let db= getDatabase(firebaseApp);
export { 
    auth, 
    db, 
    ref, 
    onValue, 
    set,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
}
