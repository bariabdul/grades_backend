var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    quiz: {type: Number, required: true},
    assignment: {type: Number, required: true}
});

module.exports = mongoose.model('Insert', schema,'insert');