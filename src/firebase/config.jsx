import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAIS_QW0kQOxAI0U7SuzCfWCsZHSj4Im8Q',
  authDomain: 'lineblog-c7f1b.firebaseapp.com',
  projectId: 'lineblog-c7f1b',
  storageBucket: 'lineblog-c7f1b.appspot.com',
  messagingSenderId: '503056655596',
  appId: '1:503056655596:web:688550fcd389fda4a4f1c9',
  measurementId: 'G-4JBKXP9C1H'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getFirestore(app)

export { db, analytics }
