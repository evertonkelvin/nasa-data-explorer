import express from 'express';
import cors from 'cors';
import nasaRoutes from './routes/nasaRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();

app.use(cors(process.env.FRONTEND_LINK || 'http://localhost:5173/'));
app.use(express.json());

app.use('/nasa', nasaRoutes);
app.use('/api', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('NASA Express API is running');
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
})