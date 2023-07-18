import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-renato-5c98f714c67a.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;