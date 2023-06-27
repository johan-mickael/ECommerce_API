const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./src/routers/product.router');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = 'mongodb://localhost:27017/amazonclone';

// Connect to MongoDB
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

module.exports = app;
