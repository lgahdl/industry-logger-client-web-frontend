// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDV6fuPZcXo4sYTbaPvGved0e5ewTaBGqk',
  authDomain: 'industry-logger.firebaseapp.com',
  projectId: 'industry-logger',
  storageBucket: 'industry-logger.appspot.com',
  messagingSenderId: '910560229527',
  appId: '1:910560229527:web:43646c61b2643e5ec891d2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app