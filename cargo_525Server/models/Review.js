import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        text: String,
        description: String,
        author: String,
        location: String,
        language: String,
    },
    { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);