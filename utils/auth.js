import axios from "axios";

const API_KEY = "AIzaSyCa0q8qeX1D8YoIxWqjYvAllmJfW5W9TE0";

// Function will return a Promise once the request is done due to async await
export async function createUser(email, password) {
    const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );
}
