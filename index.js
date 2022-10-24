import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
// import { getUsers, addUser, addKite, setKiteSellability, deleteUser, deleteKite, getKites } from './testPrisma.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hi Ta! from Yechiel');
});

// app.get('/kites', async (req, res) => {
//     res.send(await getKites());
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
