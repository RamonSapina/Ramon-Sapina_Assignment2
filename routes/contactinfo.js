const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect to contactinfo
const contactinfo = require('../models/contactinfo');


// Manage all routes
// call for "localhost/contactinfo"
router.get('/', (req, res, next) => {
  contactinfo.find((err, contactList) => {
    if (err) {
        return console.error(err);
      //return res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/home');
    }
  });
});

// Open add project page
// tthis means = localhost/contactinfo/contact 
 router.get('/contactme', (req, res, next) => {
   res.render('contactme', { title: 'Add Contact Info.' });
});

// Insert visitor contact info data into MongoDB coll
router.post('/contactme', (req, res, next) => {
  const newContact = new contactinfo({
    Firstname: req.body.pFname,
    Lastname: req.body.pLname,
    Email: req.body.pEmail,
    Mobile: req.body.pMobile,
    Message: req.body.pMessage
  });

  newContact.save((err, savedContact) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/home');
    }
  });
});

module.exports = router;