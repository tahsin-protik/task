import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

export default app; 