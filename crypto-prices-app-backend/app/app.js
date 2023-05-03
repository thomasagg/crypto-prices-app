const express = require('express');
const coinsRoutes = require('./routes/coinRoutes');

const app = express();

// Set up middleware
app.use(express.json());

// Set up routes
app.use('/coins', coinsRoutes);

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});