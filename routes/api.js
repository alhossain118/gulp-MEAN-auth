'use strict';

const express = require('express');

let router = express.Router();

router.use('/variables', require('./variables'))


module.exports = router;
