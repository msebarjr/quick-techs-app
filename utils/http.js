import axios from "axios";
import { FIREBASE_DB_URL } from "@env";

export function createClient(clientData) {
    axios.post(`${FIREBASE_DB_URL}users/clients.json`, clientData);
}

export function createTech(techData) {
    axios.post(`${FIREBASE_DB_URL}users/techs.json`, techData);
}
