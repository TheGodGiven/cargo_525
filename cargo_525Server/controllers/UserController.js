import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const addUser = async (req, res) => {
    try {
        const { name } = req.body;

        const candidate = await User.findOne({ name });

        if (candidate) {
            return res.status(409).json({
                message: "Пользователь с таким именем уже существует",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const doc = new User({
            name,
            password: hash,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id,
            },
            process.env.SecretKey,
            {
                expiresIn: "30d",
            }
        );

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        console.log(req.body);
        const { name, password } = req.body;
        const candidate = await User.findOne({ name });

        if (!candidate) {
            return res.status(404).json({
                message: "Неверный логин или пароль",
            });
        }

        const isValidPass = await bcrypt.compare(password, candidate.password);

        if (!isValidPass) {
            return res.status(404).json({
                message: "Неверный логин или пароль",
            });
        }

        const token = jwt.sign({ _id: candidate._id }, process.env.SecretKey, {
            expiresIn: "30d",
        });

        res.status(201).json({token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(403).json({
                message: "Нет доступа",
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
