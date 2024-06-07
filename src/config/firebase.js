import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWsfdwKcTXSOTOFSCt-taafm6Yj9ylUrg",
  authDomain: "embdastur.firebaseapp.com",
  projectId: "embdastur",
  storageBucket: "embdastur.appspot.com",
  messagingSenderId: "832180475404",
  appId: "1:832180475404:web:0b539ec0dcc4cac0c44029",
  measurementId: "G-JMZ1PDJ3W0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
