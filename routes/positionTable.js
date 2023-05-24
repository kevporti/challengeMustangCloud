const express = require('express');
const router = express.Router();
const TableModel = require('../models/positionTable');

// Getting all Teams
router.get('/', async (req, res) => {
    var tableData = await TableModel.findOne({}, { data: 1 });
    tableData = tableData.data;
    
    res.render('positionsTable', { 
        tableData: tableData,

        // Helper to get access to the data stored in each team.
        // This should not be necessary but for some reason when iterating through the array, the data cannot be retrieved
        // so I had to do it this way.
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


module.exports = router;