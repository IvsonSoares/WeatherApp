import axios from "axios";

const api = axios.create({
    baseURL: "https://goweather.herokuapp.com/weather/"
})

export default api