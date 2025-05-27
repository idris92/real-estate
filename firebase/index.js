
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"

//config
const firebaseConfig = {
  apiKey: "AIzaSyBzy-_hPsZHBl2Ts6c_-MkLrZD6D_p25WQ",
  authDomain: "real-estate-dc3a7.firebaseapp.com",
  projectId: "real-estate-dc3a7",
  storageBucket: "real-estate-dc3a7.firebasestorage.app",
  messagingSenderId: "844197807215",
  appId: "1:844197807215:web:5eaf588bbc46c50326f99a"
};

//initialize
const app = initializeApp(firebaseConfig);



export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)


//collection 
export const userRef = collection(db, 'users')




