import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBQLqhlb4IggSDPzHOYeyyADlM8vqweRRo",
    authDomain: "linkedin-clone-883a0.firebaseapp.com",
    projectId: "linkedin-clone-883a0",
    storageBucket: "linkedin-clone-883a0.appspot.com",
    messagingSenderId: "236336219885",
    appId: "1:236336219885:web:1aed5408ec8f9fe6362ee4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };


