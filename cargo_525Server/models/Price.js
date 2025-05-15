import mongoose from "mongoose";

const PriceSchema = new mongoose.Schema(
    {
        value: {
            type: Number,
            default: 100,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Price", PriceSchema);