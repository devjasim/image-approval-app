import axios from "axios";

// Create API with unsplash bash url
const API = axios.create({ baseURL: "https://api.unsplash.com" });

// Unsplash API KEY
const APP_ID = "M2i3RlZAG_vmYZUa01zHbCPhEg7vEhzmLa_cppmwjhA";

API.interceptors.request.use((req: any) => {
  return req;
});

// Get Random Image API
export const fetchImage = () => API.get("/photos/random?client_id=" + APP_ID);
