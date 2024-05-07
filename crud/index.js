import express from "express";
import "dotenv/config";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/userRoute.js";
const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URL;
const app = express();
app.use(bodyParser.json());
mongoose
  .connect(MONGO)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((error) => {
    console.log("error");
  });

app.use("/api/user", routes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
