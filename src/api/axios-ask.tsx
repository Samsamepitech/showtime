import axios from "axios";



export const apiUrl = axios.create({
    baseURL: "http://localhost:3030",
    headers: {
        "Content-type" : "application/json"
    }
});



