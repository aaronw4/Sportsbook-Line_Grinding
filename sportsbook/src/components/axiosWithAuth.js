import axios from 'axios';

const axiosWithAuthNcaaBB = () => {
    return axios.create({
        baseURL: 'https://therundown-therundown-v1.p.rapidapi.com',
        headers: {
            "x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
            "x-rapidapi-key": "9e7abdd2a5msh27d1e47d918d27ap1b7b0fjsneed4da8f01d5"
        }
    })
}

export default axiosWithAuth;