import express from "express";
import dotenv from "dotenv";

import Post from "../mongodb/models/post.js";

import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

// Get All posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
});

// Create a post
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    console.log("it's ok");
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.log("it's bad request");
    res.status(400).json({ success: false, error: error });
  }
});

export default router;
