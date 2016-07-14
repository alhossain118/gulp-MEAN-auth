'use strict';

const mongoose = require('mongoose');

let variableSchema = new mongoose.Schema({
  name : {type: String}
});

let Variable = mongoose.model('Variable', variableSchema)

module.exports = Variable;
