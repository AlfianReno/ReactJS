import axios from "axios";

const url = "http://localhost:8000/api";
let token = "bWLhS3atZck5ent0aTdPjzmdnF0tUdQRL3ZNMSuk";

export const link = axios.create({
  baseURL: url,
  headers: {
    api_token: token,
  },
});
