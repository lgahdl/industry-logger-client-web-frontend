import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import onAuthStateChangedFunction from '@/libs/firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyDHq9a1Z-NWuvncnZybP1iayChOfHoKNxQ',
  authDomain: 'telos-platform.firebaseapp.com',
  projectId: 'telos-platform',
  storageBucket: 'telos-platform.appspot.com',
  messagingSenderId: '669394396008',
  appId: '1:669394396008:web:929e79a3bc0a92ffc52cdd',
  measurementId: 'G-CMXWWK8PP9',
}

const firebase = initializeApp(firebaseConfig)
const auth = getAuth()
getAnalytics()
auth.onAuthStateChanged(onAuthStateChangedFunction)
export default firebase