import axios from "axios"

export default axios.create({
  baseURL: "https://toko.ox-sys.com/",
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
    "Accept": "application/json",
  },
})
