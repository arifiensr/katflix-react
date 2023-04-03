import axios from "axios";

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: "application/json"
  },
  params: {
    api_key: 'aabdcdfbf2bd76cce7d93da2a30f8c86'
  }
})