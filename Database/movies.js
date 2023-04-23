const mongoose = require("mongoose"); //required to import the mongoose library into the code

const MovieSchema = mongoose.Schema({ //provided by the Mongoose library that allows you to define the structure of your data in MongoDB
  movie_id: {
    type: String,
    require: true,
    minLength: 1,
  },
  title: {
    type: String,
    require: true,
    minLength: 2,
  },

  directors: {
    type: [Number],
    require: true,
    minLength: 2,
  },
  producers: {
    type: [Number],
    require: true,
    minLength: 2,
  },
  languages:{
    type: String,
    require: true,
    minLength: 2,
  },
  release_date:{
    type: String,
    require: true,
    minLength: 2,
  },
  generes:{
    type: [String],
    require: true,
    minLength: 2,
  }
});


const MovieModel=mongoose.model("Movies",MovieSchema) //The first argument "Movies" in the mongoose.model("Movies", MovieSchema) method is used to define the name of the collection in MongoDB database. The second argument MovieSchema is used to define the structure of the document that will be saved to the collection.

module.exports=MovieModel;