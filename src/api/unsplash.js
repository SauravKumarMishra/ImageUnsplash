import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pjN9XsW2jr5axJ0OuAjqGEyjvAfrtuMYrwyXNwX76Jk",
  },
});
