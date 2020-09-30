import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-43168.cloudfunctions.net/api'

    //THE API (cloud function) URL


});

export default instance;



//LocalHost
//http://localhost:8080/clone-43168/us-central1/api