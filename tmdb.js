require('dotenv').config()
const axios = require('axios')

const tmdbAPI = axios.create({
    baseURL :'https://api.themoviedb.org/3',
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${process.env.TMDB_BEARER}`
    }
})
async function fetchData() {
    try {
        const response = await axios.get('https://api.themoviedb.org/3'); 
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

module.exports = {tmdbAPI,fetchData}