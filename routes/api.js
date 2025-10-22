import express from "express"
import * as authcontroller from "../controller/authController.js"
import * as profileController from "../controller/profileController.js"

const api = express.Router()

api.post('/register', authcontroller.register)

api.post('/login', authcontroller.login)

api.get('/me', profileController.privateProfile)

export default api
