// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence, getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzHHsJMKC0-kcSFI6OACCQsa4jdR0KWR0",
  authDomain: "chatapp-33c0c.firebaseapp.com",
  projectId: "chatapp-33c0c",
  storageBucket: "chatapp-33c0c.appspot.com",
  messagingSenderId: "965152059705",
  appId: "1:965152059705:web:dabcd214321e42d9f738e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage),
//   });
export {auth}
export const database=getFirestore(app)
const storage = getStorage(app)

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB80SoDmSZFezZnYHzgbmW7sKwPpx4hcEk",
//   authDomain: "advertisementapp-f938f.firebaseapp.com",
//   projectId: "advertisementapp-f938f",
//   storageBucket: "advertisementapp-f938f.appspot.com",
//   messagingSenderId: "671419057202",
//   appId: "1:671419057202:web:96dd06f49eed3906d7a82b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// const storage = getStorage(app)
// const db = getFirestore(app);
// export {auth}
// export {db}
// export {storage}