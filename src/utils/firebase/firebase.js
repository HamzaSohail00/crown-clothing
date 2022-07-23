// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdxF-3XcB_x5xLdR-c2UkFO3gdEPa75EE",
    authDomain: "crown-clothing-db-a62e4.firebaseapp.com",
    projectId: "crown-clothing-db-a62e4",
    storageBucket: "crown-clothing-db-a62e4.appspot.com",
    messagingSenderId: "896724211519",
    appId: "1:896724211519:web:063a31397b1d1e8480658a",
    measurementId: "G-FN5DXBF75G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user) => {
    const userDocReference = doc(db, 'users', user.uid);
    const getUserSnapshot = await getDoc(userDocReference);

    if (!getUserSnapshot.exists()) {
        try {

            const { displayName, email } = user;
            const createdAt = new Date();

            await setDoc(userDocReference, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error while creating user document: ', error.message)
        }
    }

    return userDocReference;
}