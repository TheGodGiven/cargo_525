import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { addReview, getReviews, deleteReview, updateReview } from "./controllers/ReviewController.js";
import { addPrice, getPrice, updatePrice } from "./controllers/PriceController.js";
import { addUser, login, getUser } from "./controllers/UserController.js";
import checkAuth from "./utils/checkAuth.js";

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Mongodb OK");
    })
    .catch((err) => {
        console.log("Mongodb Error", err);
    });

const app = express();

app.use(express.json());
app.use(cors());

app.post("/addReview", checkAuth, addReview);
app.get("/getReviews", getReviews);
app.delete("/deleteReview/:id", checkAuth, deleteReview);
app.put("/updateReview/:id", checkAuth, updateReview)

app.post("/addPrice", checkAuth, addPrice);
app.get("/getPrice", getPrice);
app.put("/updatePrice", checkAuth, updatePrice);

app.post("/addUser", checkAuth, addUser);
app.post("/login", login);
app.get("/getUser", checkAuth, getUser);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
