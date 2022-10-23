import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import { getUsers, addUser, setKiteSellability } from "./testPrisma.js";

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
	res.send(await getUsers())
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