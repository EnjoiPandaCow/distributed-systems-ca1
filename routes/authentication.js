const User = require('../models/user');

// Passing in Express router and returning it to return all of the API routes.
module.exports = (router) => {

    // Register User Route
    router.post('/register', (req, res) => {
        if (!req.body.email) {
            res.json({success: false, message: 'You must provide and e-mail.'});
        } else {
            if (!req.body.username) {
                res.json({success: false, message: 'You must provide a username.'});
            } else {
                if (!req.body.password) {
                    res.json({success: false, message: 'You must provide a password.'});
                } else {
                    if (!req.body.fName) {
                        res.json({success: false, message: 'You must provide a first name.'});
                    } else {
                        if (!req.body.lName) {
                            res.json({success: false, message: 'You must provide a last name.'});
                        } else {
                            if (!req.body.role) {
                                res.json({success: false, message: 'You must provide a role.'});
                            } else {
                                if (!req.body.mobile) {
                                    res.json({success: false, message: 'You must provide a mobile phone number.'});
                                } else {
                                    // Creating new user.
                                    let user = new User({
                                        email: req.body.email.toLowerCase(),
                                        username: req.body.username,
                                        password: req.body.password,
                                        fName: req.body.fName,
                                        lName: req.body.lName,
                                        role: req.body.role,
                                        mobile: req.body.mobile
                                    });
                                    // Saving user and controlling errors.
                                    user.save((err) => {
                                        if (err) {
                                            if (err.code === 11000) {
                                                res.json({
                                                    success: false,
                                                    message: 'Username or e-mail already exists.'
                                                });
                                            } else {
                                                // If validation is wrong on the register fields.
                                                if (err.errors) {
                                                    if (err.errors.email) {
                                                        res.json({success: false, message: err.errors.email.message});
                                                    } else {
                                                        if (err.errors.username) {
                                                            res.json({success: false, message: err.errors.username.message});
                                                        } else {
                                                            if (err.errors.password) {
                                                                res.json({success: false, message: err.errors.password.message});
                                                            } else {
                                                                if (err.errors.fName) {
                                                                    res.json({success: false, message: err.errors.fName.message});
                                                                } else {
                                                                    if (err.errors.lName) {
                                                                        res.json({success: false, message: err.errors.lName.message});
                                                                    } else {
                                                                        if (err.errors.mobile) {
                                                                            res.json({success: false, message: err.errors.mobile.message});
                                                                        } else {
                                                                            res.json({success: false, message: err});
                                                                        }
                                                                    }
                                                                }

                                                            }
                                                        }
                                                    }
                                                } else {
                                                    res.json({
                                                        success: false,
                                                        message: 'Could not save user. Error:',
                                                        err
                                                    });
                                                }
                                            }
                                        } else {
                                            res.json({success: true, message: 'Account Registered!'})
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    // Checking if user email is already taken.
    router.get('/checkEmail:email', (req, res) => {
        // If email not provided
        if(!req.params.email) {
            res.json({ success: false, message: 'E-mail was not provided'});
            // If email provided.
        } else {
            // Return error if there was an error.
            User.findOne({ email: req.params.email}, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err});
                } else {
                    // Return if the email is already used.
                    if (user) {
                        res.json({ success: false, message: 'E-mail is already taken' });
                        // Return if email is okay.
                    } else {
                        res.json({ success: true, message: 'E-mail is available' });
                    }
                }
            });
        }
    });

    // Checking if username is already taken.
    router.get('/checkUsername:username', (req, res) => {
        if(!req.params.username) {
            res.json({ success: false, message: 'Username was not provided'});
        } else {
            User.findOne({ username: req.params.username}, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err});
                } else {
                    if (user) {
                        res.json({ success: false, message: 'Username is already taken' });
                    } else {
                        res.json({ success: true, message: 'Username is available' });
                    }
                }
            });
        }
    });

    return router;
};