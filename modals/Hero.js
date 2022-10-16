const mongoose = require('mongoose')

const HeroSchema = new mongoose.Schema({
  superHro:{
    type: String,
    required: [true, "Please name this hero"],
    trim: true,
    unique: true,
  },
  realName:{
    type: String,
    required: true,
    maxLength:[200,"Please keep real name short"]
  }
})

module.exports = mongoose?.model.Hero || mongoose.model('Hero', HeroSchema)



// const bookSchema = new mongoose.Schema({
//     name: String,
//     genre: String,
//     authorID: String
// })


// module.exports = mongoose.model("Books", bookSchema)