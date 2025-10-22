import UserModel from "../models/userModel.js";
import { hash, compare } from "../utils/hashUtil.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";

export const register = async (req, res) => {
    try {

        const request = req.body
        console.log(request);

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
        res.status(500).json({
            message: e.message,
            data: null
        })
    }
}

export const login = async (req, res) => {
    try {
        const request = req.body;
        const user = await UserModel.findOne({email: request.email});

        if(!user) {
            return res.status(404).json({
                message: "Email atau password salah",
                data: null
            });
        }
    
        const isPasswordMatch = compare(request.password, user.password);

        if(!isPasswordMatch) {
            return res.status(404).json({
                message: "Email atau password salah",
                data: null
            });
        }
    
        if(compare(loginData.password, user.password)) {
            return res.status(200).json({
                message: "Login Berhasil",
                data: {
                    username: user.username,
                    email: user.email,
                    token: jwtSignUtil(user)
                },
            })
    }
    res.status(401).json ({
        message : "Login gagal",
        data : null
    })

} catch (error) {
        res.status(500).json({
            meassage: error.message,
            data: null
        })
    }
}