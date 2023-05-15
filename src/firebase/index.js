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
  apiKey: "",
  authDomain: "saman-shopping.firebaseapp.com",
  projectId: "saman-shopping",
  storageBucket: "saman-shopping.appspot.com",
  messagingSenderId: "",
  appId: ""
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
