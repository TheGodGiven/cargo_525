import mongoose from "mongoose";

const LangString = {
    ru: { type: String, required: true },
    en: { type: String, required: true },
    kz: { type: String, required: true },
    ch: { type: String, required: true }
};

const ReviewSchema = new mongoose.Schema(
    {
        text: LangString,
        description: LangString,
        author: LangString,
        location: LangString
    },
    { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);