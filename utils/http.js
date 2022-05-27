import axios from "axios";
import { FIREBASE_DB_URL } from "@env";

export function storeClient() {
    axios.post(`${FIREBASE_DB_URL}users/clients.json`, { name: "Michael" });
}

export function storeTech() {
    axios.post(`${FIREBASE_DB_URL}users/techs.json`, { name: "Michael" });
}
