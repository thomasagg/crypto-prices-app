const express = require('express');
const coinsRoutes = require('./routes/coinRoutes');
const cors = require('cors')

const app = express();

// set up middleware
app.use(express.json());
app.use(cors())

// set up routes
app.use('/coins', coinsRoutes);

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});