import express from "express"
import * as authcontroller from "../controller/authController.js"

const api = express.Router()

api.post('/register', authcontroller.register)

api.post('/login', authcontroller.login)

export default api
