import jwt from "jsonwebtoken";
import User from "../models/User.js";
export default async (req, res, next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
    
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.SecretKey);

            const user = await User.findById(decoded._id);
            
            if (!user) {
                return res.status(403).json({
                    message: "Нет доступа",
                });
            }
            
            // Передаем роль пользователя в req
            req.user = user;
            next();
        } catch (e) {
            return res.status(403).json({
                message: "Нет доступа",
            });
        }
    } else {
        return res.status(403).json({
            message: "Нет доступа",
        });
    }
};
