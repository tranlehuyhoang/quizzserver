import express from "express";
import morgan from "morgan";
import cors from 'cors'
import { config } from "dotenv";
import router from './router/router.js'
import connect from "./database/config.js";
const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json());
config()
app.use('/api', router)

const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    try {
        res.json('get câu hỏi')
    } catch (error) {
        res.json(error)
    }

})
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log('5000')
        })
    } catch (error) {
        console.log('không kết nối với database được')
    }

}).catch(err => {
    console.log('không kết nối với database được')
})