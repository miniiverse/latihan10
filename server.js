/* eslint-disable */
const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

require('dotenv').config();

// Default route
app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

const productsRoutes = require('./routes/products.routes');
app.use('/api/products', productsRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/api/login', authRoutes);


// jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
