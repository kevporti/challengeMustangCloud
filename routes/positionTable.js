const express = require('express');
const router = express.Router();
const TableModel = require('../models/positionTable');

// Getting all Teams
router.get('/', async (req, res) => {
    var tableData = await TableModel.findOne({}, { data: 1 });
    tableData = tableData.data;
    
    res.render('positionsTable', { 
        tableData: tableData, 

        helpers: {
            getPropById: function(teamObject, key) {
                return teamObject[key];
            },
            clasifica: function(key) {
                if (key == 0 || key == 1 || key == 2 || key == 3) {
                    return "clasifica";
                } else if (key == 24 || key == 25 || key == 26 || key == 27) {
                    return "desciende";
                }
            }
        }
    });
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