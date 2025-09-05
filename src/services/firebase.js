
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyA08i-pC3-FGqHP3s0jr5iqX3t8nJlqABQ",
  authDomain: "appd-90452.firebaseapp.com",
  projectId: "appd-90452",
  storageBucket: "appd-90452.firebasestorage.app",
  messagingSenderId: "145935513422",
  appId: "1:145935513422:web:15725888ec9629cb7a101f",
  measurementId: "G-B71QG47JHY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
