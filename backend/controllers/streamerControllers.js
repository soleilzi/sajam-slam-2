import mongoose from "mongoose";
import Streamer from "../models/streamerModel.js";

export const createStreamer = async (request, response) => {
  const streamer = request.body;

  if(!streamer.name || !streamer.twitter || !streamer.twitch || !streamer.youtube || !streamer.team || !streamer.rank || !streamer.image){
    response.status(400).json({success:false, message: "Please provide all fields."});
  }

  const newStreamer = new Streamer(streamer);

  try {
    await newStreamer.save();
    response.status(201).json({ success:true, data:newStreamer });
  } catch (error) {
    console.error("Error in Create", error.message);
    response.status(500).json({ success:false, data:newStreamer });
  }
};

export const getStreamers = async (request, response) => {
  try {
    const streamers = await Streamer.find({})
    response.status(200).json({ success:true, count:streamers.length, data:streamers });
  } catch (error) {
    console.error("Error in fetching streamers", error.message);
    response.status(500).json({ success:false, message:"Server Error" });
  }
};

export const getStreamer = async (request, response) => {
  const { id } = request.params;
  try {
    const streamer = await Streamer.findById(id);
    response.status(200).json({ success:true, data:streamer });
  } catch (error) {
    console.error("Error in fetching streamer", error.message);
    response.status(500).json({ success:false, message:"Server Error" });
  }
};

export const updateStreamer = async (request, response) => {
  const { id } = request.params;
  const streamer = request.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(404).json({ success:false, message:"Streamer Not Found" })
  }

  try {
    const updatedStreamer = await Streamer.findByIdAndUpdate(id, streamer, {new:true});
    response.status(200).json({ success:true, data:updatedStreamer });
  } catch (error) {
    console.error("Error in updating streamer: ", error.message);
    response.status(500).json({ success:false, message:"Server Error" });
  }
};

export const deleteStreamer = async (request, response) => {
  const { id } = request.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(404).json({ success:false, message:"Streamer Not Found" })
  }

  try {
    await Streamer.findByIdAndDelete(id);
    response.status(200).json({ success:true, message:"Streamer has been successfully deleted." });
  } catch (error) {
    console.error("Error in deleting product: ", error.message);
    response.status(500).json({ success:false, message:"Server Error" });
  }
};
