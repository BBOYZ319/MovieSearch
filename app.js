require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios');
const path = require('path');
const movieRouter = require('./routes/movie-router')

const app = express()
const port = process.env.PORT || 3000;
axios.get('https://api.themoviedb.org/3')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});

app.use(cors())
app.use(express.json())
app.use('/',movieRouter)
app.use(express.static(path.join('TMDB-MOVIES', 'public')));
app.get('/api/popular-movies', async (req, res) => {
    const apiKey = '4e20753d87c5c706b711b38f40a5bef1'
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        res.json(response.data.results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching popular movies');
    }
});

app.listen(port, ()=>{
    console.log(`Server Run at http://localhost:${port}/api/movies`);
    
})