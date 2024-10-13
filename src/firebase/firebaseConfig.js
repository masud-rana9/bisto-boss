// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCwIls8glSNnHX8CFCFs993RGj_ki6RxJc",
  authDomain: "bisto-boss-3f4a1.firebaseapp.com",
  projectId: "bisto-boss-3f4a1",
  storageBucket: "bisto-boss-3f4a1.appspot.com",
  messagingSenderId: "78108745152",
  appId: "1:78108745152:web:38730bf7744afd432efc25",
};
console.log(import.meta.env.VITE_apiKey);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
