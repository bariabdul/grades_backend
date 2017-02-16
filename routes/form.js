var express = require('express');
var router = express.Router();

var Form = require('../models/form');

router.get('/', function (req, res, next) {
    Form.find()
        .exec(function (err, form) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: form
            });
        });
});

router.post('/', function (req, res, next) {
    var form = new Form({
        username : req.body.username,
        email : req.body.email
    });
    form.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

module.exports = router;