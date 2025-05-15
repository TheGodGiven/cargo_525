import Price from "../models/Price.js";

export const addPrice = async (req, res) => {
    try {
        const { value } = req.body;
        const price = await Price.create({ value });
        res.status(201).json(price);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPrice = async (req, res) => {
    try {
        const price = await Price.findOne();
        console.log(price);
        res.status(200).json(price.value);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePrice = async (req, res) => {
    try {
        const { value } = req.body;
        console.log(value);
        const price = await Price.findOneAndUpdate({}, { value }, { new: true, upsert: true });
        res.status(200).json(price.value);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
