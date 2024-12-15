import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import authRouter from './routes/note.js';
import connectToMongoDB from './db/db.js';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8001;

app.use('/api/auth', authRouter);
app.use('/api/note', noteRouter)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running on ${PORT}`);
})