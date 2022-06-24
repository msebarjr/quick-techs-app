import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
    FIREBASE_API_KEY,
    APP_ID,
    AUTH_DOMAIN,
    PROJECT_ID,
    MESSAGING_SENDER_ID,
    STORAGE_BUCKET,
} from "@env";

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
