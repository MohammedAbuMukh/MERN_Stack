import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongooseConfig from './config/mongoose.config.js'; // Add .js extension
import productRoutes from './routes/product.routes.js'; // Add .js extension

dotenv.config();
mongooseConfig(); // Ensure mongoose config is a function

const port = process.env.PORT || 5000; // Fix port variable (use uppercase "PORT")

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json("success");
});

// Routes
productRoutes(app);

// Start server
app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Listening at Port ${port}`);
    }
});
