const express = require('express');
const axios = require('axios');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    const apiKey = process.env.NASA_API_KEY;
    const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
    const items = response.data.collection.items;
    res.render('results', { items });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
