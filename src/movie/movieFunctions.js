const Movie = require("./movieModel") 

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error) {
        console.log(error)
    }
}

exports.readMovies = async (key, filter) => {
    try {
        if (key) {
            return await Movie.findOne({[key]: filter})
        } else {
            return await Movie.find({})
        }

    } catch (error) {
        console.log(error)
    }
} 
//TODO: Add functions to handle update and delete