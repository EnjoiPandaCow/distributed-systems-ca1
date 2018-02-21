const User  = require('../models/user');
const Reservation = require('../models/reservation');
const jwt   = require('jsonwebtoken');
const config = require('../config/database');

// Passing in Express router and returning it to return all of the API routes.
module.exports = (router) => {

    router.post('/newReservation', (req, res) => {
       if (!req.body.facility) {
           res.json({ success: false, message: 'Facility used by your reservation is required.'})
       } else {
           if (!req.body.date) {
               res.json ({ success: false, message: 'Date of your reservation is required.'})
           } else {
               if (!req.body.sTime) {
                   res.json ({ success: false, message: 'Start time of your reservation is required.'})
               } else {
                   if (!req.body.eTime) {
                       res.json ({ success: false, message: 'End time of your reservation is required.'})
                   } else {
                       if (!req.body.postedBy) {
                           res.json ({ success: false, message: 'Creator of your reservation is required.'});
                       } else {
                           const reservation = new Reservation({
                             facility: req.body.facility,
                             date: req.body.date,
                             sTime: req.body.sTime,
                             eTime: req.body.eTime,
                             postedBy: req.body.postedBy
                           });
                           reservation.save((err) => {
                              if (err) {
                                  if (err.errors) {
                                      if (err.errors.date) {
                                          res.json({ success: false, message: err.errors.date.message});
                                      } else {
                                          res.json({ success: false, message: err.errmsg });
                                      }
                                  } else {
                                      res.json({ success: false, message: err});
                                  }
                              } else {
                                  res.json({ success: true, message: 'Registration Created!'})
                              }
                           });
                       }
                   }
               }
           }
       }
    });
    return router;
};