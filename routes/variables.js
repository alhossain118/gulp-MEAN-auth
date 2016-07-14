'use strict';

const express     = require('express');
const request     = require('request');
const Variable        = require('../models/variable');
let router = express.Router();

//Possible sample API request
// router.get('/:id', (req,res) => {
//   console.log("Request", req.params.id);
//   request.get({
//     url: `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${req.params.id}&callback=myFunction`
//   },
//   function(err, response,body) {
//     if(!err){
//       res.send(body)
//     }
//   }
// )
//
// })

router.route('/')
//Get all the variableSchemas
  .get((req,res) => {
    Variable.find({}, (err, variables) => {
      res.status(err ? 400 : 200).send(err || variables)
    })
  })
//Create a variableSchema
  .post((req,res) => {
    Variable.create(req.body, (err, variable) => {
      res.status(err ? 400 : 200).send(err || variable)
    })
  })

router.route('/:id')
  .put((req, res) => {
    Variable.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, variable) => {
      res.status(err ? 400 : 200).send(err || variable);
    });
  })
  .delete((req, res) => {
    Variable.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    });
  })

module.exports = router;
