import axios from "axios";
import { FIREBASE_DB_URL } from "@env";

export function createClient() {
    axios.post(`${FIREBASE_DB_URL}users/clients.json`, { name: "Michael" });
}

export function createTech(techData) {
    axios.post(`${FIREBASE_DB_URL}users/techs.json`, );
}
