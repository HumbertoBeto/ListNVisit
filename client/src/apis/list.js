import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/listnvisit/us-central1/api",
});
