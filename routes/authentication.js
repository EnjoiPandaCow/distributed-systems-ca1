const User = require('../models/user');

// Passing in Express router and returning it to return all of the API routes.
module.exports = (router) => {

    router.post('/register', (req, res) => {
        if (!req.body.email) {
            res.json({ success: false, message: 'You must provide and e-mail.'}); // Doing field validation.
        } else {
            if (!req.body.username) {
                res.json({ success: false, message: 'You must provide a username.'});
            } else {
                if (!req.body.password) {
                    res.json({success: false, message: 'You must provide a password.'});
                } else {

                    // Creating new user.
                    let user = new User ({
                        email: req.body.email.toLowerCase(),
                        username: req.body.username,
                        password: req.body.password
                    });

                    // Saving user and controlling errors.
                    user.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                res.json({ success: false, message: 'Username or e-mail already exists.'});
                            } else {
                                // If validation is wrong on the register fields.
                                if (err.errors) {
                                    if (err.errors.email) {
                                        res.json({ success: false, message: err.errors.email.message});
                                    } else {
                                        if (err.errors.username) {
                                            res.json({ success: false, message: err.errors.username.message});
                                        } else {
                                            if (err.errors.password) {
                                                res.json({ success: false, message: err.errors.password.message});
                                            } else {
                                                res.json({ success: false, message: err});
                                            }
                                        }
                                    }
                                } else {
                                    res.json({ success: false, message: 'Could not save user. Error:', err });
                                }
                            }
                        } else {
                            res.json({ success: true, message: 'Account Registered!'})
                        }
                    });

                }
            }
        }
    });
    return router;
};