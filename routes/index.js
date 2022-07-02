const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next)=>{
    Movie.find()
        .then(moviesFromDB => {
            //console.log("Retrieved movies from DB", moviesFromDB);
            
            res.render("movies", { movies: moviesFromDB });
        })
        .catch(error => console.log("Unable to get data from DB: ", error));
})

router.get('/movies/:id', (req, res, next)=>{
    Movie.findById(req.params.id)
    .then(movieFromDB =>{
        console.log(movieFromDB)
        res.render("details", { 
            title: movieFromDB.title,
            movie: movieFromDB 
        });
    })
    .catch(err => console.log('Could not finding id',err))
})

module.exports = router;
