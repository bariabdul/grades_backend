var express = require('express');
var router = express.Router();

var Insert = require('../models/insert');

router.get('/', function (req, res, next) {
    Insert.find()
        .exec(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                success:1,
                obj: result
            });
        });
});

router.post('/', function (req, res, next) {
    var insert = new Insert({
        quiz : req.body.quiz,
        assignment : req.body.assignment
    });
    insert.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            success:1,
            obj: result
        });
    });
});

router.delete('/:id', function(req, res, next) {
    Insert.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'No id Found!',
                error: {message: 'id not found'}
            });
        }
        user.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted data',
                success:1,
                obj: result
            });
        });
    });
});


module.exports = router;