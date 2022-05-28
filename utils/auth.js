import axios from "axios";
import { FIREBASE_AUTH_URL, FIREBASE_API_KEY } from "@env";

import { createClient, createTech } from "../utils/http";

async function authenticateUser(mode, email, password) {
    const url = `${FIREBASE_AUTH_URL}${mode}?key=${FIREBASE_API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });

    return response.data.idToken;
}

export function createUser(name, email, password, disableClientButton) {
    const token = authenticateUser("signUp", email, password);
    const isClient = !disableClientButton;

    if (isClient) createClient({ name, isLoggedIn: true });
    else createTech({ name, isLoggedIn: true });

    return token;
}

export function loginUser(email, password) {
    return authenticateUser("signInWithPassword", email, password);
}
