import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { getUsers, addUser, addKite, setKiteSellability, deleteUser, deleteKite, getKites } from './prismaFunctions.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hi Ta! from Yechiel');
});

app.post('/signup', async (req, res) => {
	const id = await addUser(req.body.email, req.body.name, req.body.password)
	res.send(`Your ID is ${id}`)
})

app.post('/addKite', async (req, res) => {
    const id = await addKite(
		req.body.sellerId,
		req.body.price,
		req.body.brand,
		req.body.model,
		req.body.year,
		req.body.size,
		req.body.country,
		req.body.city,
		req.body.address,
		req.body.notes
	);
    res.send(`Your kite's ID is ${id}`);
});

app.get('/kites', async (req, res) => {
    res.send(await getKites());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
