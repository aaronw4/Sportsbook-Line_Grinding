import axios from 'axios';

const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://sportspage-feeds.p.rapidapi.com',
        headers: {
            "x-rapidapi-host": "sportspage-feeds.p.rapidapi.com",
		    "x-rapidapi-key": "9e7abdd2a5msh27d1e47d918d27ap1b7b0fjsneed4da8f01d5"
        }
    })
}

export default axiosWithAuth;