const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5500;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const searchQuery = req.query.q || 'space';
    const page = req.query.page || 1;
    try {
        const response = await axios.get('https://images-api.nasa.gov/search', {
            params: {
                q: searchQuery,
                media_type: 'image',
                page: page
            }
        });
        const images = response.data.collection.items;
        const totalHits = response.data.collection.metadata.total_hits;
        res.render('index', { images, searchQuery, page, totalHits });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data from NASA API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
