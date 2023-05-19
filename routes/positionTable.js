const express = require('express');
const router = express.Router();
const { scraping } = require('../scrapperScript');

// Getting all Teams
router.get('/', async (req, res) => {
    const data = await scraping();

    console.log(data('table tbody tr.clasificacion').text())
    // res.send(data);
})

// Creating One Team
router.post('/create', (req, res) => {
    
})

// Updating One Team
router.patch('/update/:id', (req, res) => {
    
})

// Deleting One Team
router.delete('/delete/:id', (req, res) => {
    
})


module.exports = router;