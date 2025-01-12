const userModel = require('../models/user-model')
const axios = require('axios');
const API_KEY = '4e20753d87c5c706b711b38f40a5bef1'; 
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';

const getAllUsers = (req,res)=>{
    try {
        const users = userModel.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
    }
}

const getUserByIndex = (req,res)=>{
    try {
        const user = userModel.getUserByIndex(req.params.index)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
}

const getPopularMovies = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`);
        const movies = response.data.results;
        res.render('movies', { movies }); 
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {getAllUsers,getUserByIndex,getPopularMovies}