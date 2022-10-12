require("./db/connection");
const mongoose = require('mongoose')
const yargs = require("yargs")
const { createMovie, readMovies } = require("./movie/movieFunctions")

const app = async (yargsObject) => {
    try {
        if (yargsObject.create) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log(await readMovies())
        } else if (yargsObject.read) {
            console.log(await readMovies(yargsObject.key, yargsObject.filter));
        //TODO: Add update and delete
        } else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect()
    } catch (error) {
        await mongoose.disconnect()
        console.log(error)

    }
}

app(yargs.argv)