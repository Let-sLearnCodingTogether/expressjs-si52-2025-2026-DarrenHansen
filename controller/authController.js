import UserModel from "../models/userModel.js";
import { hash, compare } from "../utils/hashUtil.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";

export const register = async (req, res) => {
    try {

        const request = req.body
        console.log(request);

        // check existing username or email
        const existing = await UserModel.findOne({
            $or: [{ username: request.username }, { email: request.email }]
        });

        if (existing) {
            return res.status(409).json({
                message: 'Username atau email sudah terdaftar',
                data: null
            });
        }

        const hashPassword = hash(request.password);

        await UserModel.create({
            username: request.username,
            email: request.email,
            password: hashPassword,
        })
        
        res.status(201).json({
            meassage: "Berhasil register, silahkan Login",
            data: null
        })
    } catch(e) {
        // handle duplicate key (11000) - return 409 Conflict
        if (e.code === 11000) {
            return res.status(409).json({
                message: 'Duplicate key error',
                data: null
            });
        }
        res.status(500).json({
            message: e.message,
            data: null
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Email atau password salah",
                data: null
            });
        }

        const isPasswordMatch = compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(404).json({
                message: "Email atau password salah",
                data: null
            });
        }

        // generate token
        const token = jwtSignUtil(user);

        return res.status(200).json({
            message: "Login Berhasil",
            data: {
                username: user.username,
                email: user.email,
                token
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}