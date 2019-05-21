const db = require('../models/db');

module.exports.addUnit = function(req, res) {
    db.createUnit(req.body.unitName, req.body.unitType, req.body.address, req.body.phone, req.body.website, (err) => {
        if (err) {
            res.json({
                status: false,
                message: 'Creating failed'
            })
        }
        // return res.json({status: true, message: "ahihi"})
        return res.redirect('/unit');
    })
}

module.exports.delUnit = function(req, res) {
    console.log(req.body.id);
    console.log(req.body.type);
    if(req.body.type === "delete") {
        db.deleteUnit(req.body.id)
    }
}