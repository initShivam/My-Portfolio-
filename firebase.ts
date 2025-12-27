import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzZMTdXeMKkx4VJP_MQKQTAqHKGOzN4aE",
  authDomain: "myportfilio-f5054.firebaseapp.com",
  projectId: "myportfilio-f5054",
  storageBucket: "myportfilio-f5054.firebasestorage.app",
  messagingSenderId: "724830367266",
  appId: "1:724830367266:web:3490aa5a7c463d8a60e47b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
