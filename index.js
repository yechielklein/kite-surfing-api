import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import { getUsers } from "./testPrisma.js";

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/hi', (req, res) => {
	res.send('Hi from yechiel')
})

app.post('/hi', (req, res) => {
	res.send(`Hi from ${req.body.hifrom}`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})