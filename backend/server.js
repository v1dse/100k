import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import sequelize from './config/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/social-analytics', analyticsRoutes);
// Routes
app.use('/api/authRoutes', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/analytics', analyticsRoutes);

// DB & Server start
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => console.error('DB connection failed:', err));