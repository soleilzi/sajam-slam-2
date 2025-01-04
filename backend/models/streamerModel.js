import mongoose from "mongoose";

const streamerSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  twitter:{
    type: String,
    required: true
  },
  twitch:{
    type: String,
    required: false
  },
  youtube:{
    type: String,
    required: true
  },
  team:{
    type: String,
    required: true
  },
  rank:{
    type: Number,
    min: 1,
    max: 5,
    default: 1,
    required: true
  },
  image:{
    type: String,
    required: true
  },
})

const Streamer = mongoose.model('Streamer', streamerSchema);

export default Streamer;