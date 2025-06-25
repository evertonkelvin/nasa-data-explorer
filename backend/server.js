import express from "express"
import nasaRoutes from './routes/nasaRoutes.js';

const app = express()
const PORT = 3000

app.use('/nasa', nasaRoutes);

app.get('/', (req, res) => {
  res.send('NASA Express API is running')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})