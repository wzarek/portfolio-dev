import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
//import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: "AIzaSyD8mbFqEeYX7_XWSVslnr2A3O3FGcJdcSM",
  authDomain: "portfolio-web-dev-bed65.firebaseapp.com",
  projectId: "portfolio-web-dev-bed65",
  storageBucket: "portfolio-web-dev-bed65.appspot.com",
  messagingSenderId: "162329209572",
  appId: "1:162329209572:web:7b7e79ac0bcf83ad939af1"
};

const firebaseConfig2 = {
  apiKey: "AIzaSyD8mbFqEeYX7_XWSVslnr2A3O3FGcJdcSM",
  authDomain: "portfolio-web-dev-bed65.firebaseapp.com",
  projectId: "portfolio-web-dev-bed65",
  storageBucket: "portfolio-web-dev-bed65.appspot.com",
  messagingSenderId: "162329209572",
  appId: "1:162329209572:web:56453f181a088d76939af1"
};

const app = initializeApp(firebaseConfig2);
const db = getFirestore(app);
const storage = getStorage(app);
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider('6LdmE8kfAAAAAGg4_ieOJIRyLy_Fm44vfWqRdtw3'),
//   isTokenAutoRefreshEnabled: true
// });

export { storage, db, app };