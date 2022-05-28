import axios from "axios";
import { FIREBASE_AUTH_URL, FIREBASE_API_KEY } from "@env";

async function authenticateUser(mode, email, password) {
    const url = `${FIREBASE_AUTH_URL}${mode}?key=${FIREBASE_API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });

    return response.data.idToken;
}

export function createUser(email, password) {
    const token = authenticateUser("signUp", email, password);

    return token;
}

export function loginUser(email, password) {
    return authenticateUser("signInWithPassword", email, password);
}
