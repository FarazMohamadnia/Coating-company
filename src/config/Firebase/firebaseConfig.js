import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDLSH7zUeykHI3Zg_dyP-o57vCFjRED73Y",
  authDomain: "nucoatingg.firebaseapp.com",
  projectId: "nucoatingg",
  storageBucket: "nucoatingg.appspot.com",
  messagingSenderId: "439732645467",
  appId: "1:439732645467:web:49488e0f2f809eb800197e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imgDB = getStorage(app)