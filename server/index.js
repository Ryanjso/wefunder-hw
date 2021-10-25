const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const path = require('path');

// Connect to MongoDB database
const connectToDb = require('./database/db');
connectToDb(process.env.MONGO_CONNECTION);

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// not secure and would be changed in real production app
app.use(cors({ origin: '*' }));

// route api calls
const companyController = require('./controllers/companyController');
app.use('/api/company', companyController);

// Tell express to display angular app
app.use('/', express.static(path.join(__dirname, 'angular')));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'angular', 'index.html'));
});

app.listen(port, () => console.log(`Server started at port: ${port}`));
