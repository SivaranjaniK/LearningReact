import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID ba473ea0fcd624de714e8ab5daf800dfeefec2cc957ce41e547c796f8c417c22"
  }
});
