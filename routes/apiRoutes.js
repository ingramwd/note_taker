const router = require('express').Router();
const { writeFileSync } = require('fs');
const { note } = require('../db/db.json');
fs = require('fs');

router.get('/notes', (req, res) => {
    res.readFile('../db/db.json'), (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);
        res.send(notes);
    };
});

router.post('/notes', (req, res) => {
    console.log(req.body)
    writeFileSync(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

module.exports = router;
