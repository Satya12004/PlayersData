const mongoose=require('mongoose')
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      team: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      runs: {
        type: Number,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['Batsman', 'Bowler', 'All-rounder', 'Wicket-keeper'],
        required: true
      },
      salary: {
        type: Number,
        required: true
      }
},{timestamps:true});
module.exports=mongoose.model('Player',Schema)