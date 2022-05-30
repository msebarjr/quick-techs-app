import axios from "axios";
import { FIREBASE_DB_URL } from "@env";

export function createClient(clientData) {
    axios.post(`${FIREBASE_DB_URL}users/clients.json`, clientData);
}

export function createTech(techData) {
    axios.post(`${FIREBASE_DB_URL}users/techs.json`, techData);
}

// export async function fetchTechProfile(token) {
//     const response = await axios.get(`${FIREBASE_DB_URL}users/techs.json`);

//     const tech = {};

//     for (const key in response.data) {
//       if (response.data[key].token === token) {
//         const techInfo = {
//           id: key,
//           name: response.data[key].name,
//         }
//       }
//     }
// }
