const db = require('../models/db');

module.exports.addUnit = function(req, res) {
    db.createUnit(req.body.unitName, req.body.unitType, req.body.address, req.body.phone, req.body.website, (err) => {
        if (err) {
            res.json({
                status: false,
                message: 'Creating failed'
            })
        }
        return res.redirect('/unit');
    })
}

module.exports.delUnit = function(req, res) {
    db.deleteUnit((err) => {
        if (err) {
            res.json({
                status: false,
                message: 'Deleting failed'
            })
        }
        return res.redirect('/unit');
    })
}