const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/hi', (req, res) => {
	res.send('Hi from yechiel')
})

app.post('/hi', (req, res) => {
	res.send(`Hi from  ${req.body.hifrom}`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})