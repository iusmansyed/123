import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCI_VQFp2yGOPUi3cDwri4A_OQzT9ZfhuU",
  authDomain: "e-commerce-258b6.firebaseapp.com",
  projectId: "e-commerce-258b6",
  storageBucket: "e-commerce-258b6.appspot.com",
  messagingSenderId: "299151312619",
  appId: "1:299151312619:web:827e847f39e30b9229a0ae",
  measurementId: "G-8NKDXSW1PF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = firebase.auth();