import Review from "../models/Review.js";

export const addReview = async (req, res) => {
    try {
        const { text, description, author, location } = req.body;
        const review = await Review.create({ text, description, author, location });
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id = ", id);
        
        await Review.findByIdAndDelete(id);
        res.status(200).json({ message: "Review deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, description, author, location } = req.body;
        const updated = await Review.findByIdAndUpdate(
            id,
            { text, description, author, location },
            { new: true }
        );
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};