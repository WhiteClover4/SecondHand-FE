// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  firebaseApiKey,
  firebaseAuthDomain,
  firebaseFirebaseAppId,
  firebaseMessagingSenderId,
  firebaseProjectId,
  firebaseStorageBucket,
} from '../../constants/environment';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseFirebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
