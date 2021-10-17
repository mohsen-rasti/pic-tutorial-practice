import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID JPIJ3qzdtiv5vVpRzggFkfoGFrMjIygforkZR3x35lc'

    }
});