import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD8mbFqEeYX7_XWSVslnr2A3O3FGcJdcSM",
  authDomain: "portfolio-web-dev-bed65.firebaseapp.com",
  projectId: "portfolio-web-dev-bed65",
  storageBucket: "portfolio-web-dev-bed65.appspot.com",
  messagingSenderId: "162329209572",
  appId: "1:162329209572:web:56453f181a088d76939af1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { storage, db, app };