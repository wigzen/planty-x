import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC10fdaYAb9q2LtQX3UQPuFmW57Tn8c1fw',
  authDomain: 'planty-x.firebaseapp.com',
  projectId: 'planty-x',
  storageBucket: 'planty-x.appspot.com',
  messagingSenderId: '399869184429',
  appId: '1:399869184429:web:b33c7cb447c885e642b924',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
