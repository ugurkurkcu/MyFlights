import axios from "axios";

const proxy = "https://thingproxy.freeboard.io/fetch/";

export default axios.create({
  baseURL: `${proxy}https://api.schiphol.nl/public-flights`,
  headers: {
    app_id: "c17cb815",
    app_key: "798ace8433c0b6cad4baaacd8ee31755",
    ResourceVersion: "v4",
  },
});

export const local = axios.create({
  baseURL: "http://localhost:4000",
});
