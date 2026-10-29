import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Настройка подключения к MongoDB с обработкой событий
mongoose.connect(MONGODB_URI)
  .then(() => console.log('[database]: Successfully connected to MongoDB.'))
  .catch((err) => console.error('[database]: Connection error:', err));

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "Server and Database integration is ready." });
});

app.listen(PORT, () => {
    console.log(`[server]: Running at http://localhost:${PORT}`);
});
