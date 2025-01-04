import express from "express"
import { createStreamer, getStreamers, getStreamer, updateStreamer, deleteStreamer }  from "../controllers/streamerControllers.js";

const router = express.Router();

router.post("/", createStreamer);

router.get("/", getStreamers);

router.get("/:id", getStreamer);

router.put("/:id", updateStreamer);

router.delete("/:id", deleteStreamer);

export default router;