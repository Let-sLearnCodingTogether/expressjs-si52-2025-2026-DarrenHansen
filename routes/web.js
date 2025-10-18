import express from "express"
import * as profileController from "../controller/profileController.js"
import * as profileController1 from "../controller/profileController1.js"
const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})

web.get('/:username', profileController.publicProfile)

web.get('/profile{/:username}', profileController1.profiletest)

export default web
