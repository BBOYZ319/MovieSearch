
const express = require('express')
const app = express()
const userRouter = require('./routes/user-route')
const movieRouter=require('./routes/movie-route')
const userLogger = require('./middlewares/logger')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(userLogger)
app.use('/api/student',userRouter)
app.use('/api/movies', movieRouter);
const port = 4000

app.listen(port, ()=>{
    console.log
    (`Server run at http://localhost:${port}/api/movies`);
})