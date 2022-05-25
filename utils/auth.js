import axios from "axios";
import { FIREBASE_URL, FIREBASE_API_KEY } from "@env";

// const API_KEY = "AIzaSyCa0q8qeX1D8YoIxWqjYvAllmJfW5W9TE0";

async function authenticate(mode, email, password) {
    const url = `${FIREBASE_URL}${mode}?key=${FIREBASE_API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });

    return response.data.idToken;
}

// Function will return a Promise once the request is done due to async await
export function createUser(email, password) {
    return authenticate("signUp", email, password);
}

export function loginUser(email, password) {
    return authenticate("signInWithPassword", email, password);
}
