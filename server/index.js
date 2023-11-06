import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/post.route.js";
import dalleRoutes from "./routes/dalle.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGNODB_URL);
    app.listen(8080, () => {
      console.log("Server listening on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
