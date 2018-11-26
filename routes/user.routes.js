const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const config = require('../config/index');

module.exports = function (router) {

    router.post("/account/register", function (request, response) {
        const user = new User();

        user.username = request.body.username;
        user.email = request.body.email;
        user.profile = request.body.profile;

        user.setPassword(request.body.password);

        user.save(function (err) {
            if (!err) {
                response.status(201);
                response.json(user);
            } else {
                response.status(500);
                response.json(err);
            }
        });
    });

    router.post("/account/login", function (request, response) {

        passport.authenticate('local', function (err, user, info) {
            let token;

            // If Passport throws/catches an error
            if (err) {
                response.status(404).json(err);
                return;
            }

            // If a user is found
            if (user) {
                token = user.generateJsonWebToken();
                response.status(200);
                response.json({
                    user: {
                        first_name : user.profile.first_name,
                        last_name : user.profile.last_name
                    },
                    "token": token
                });
            } else {
                // If user is not found
                response.status(401).json(info);
            }
        })(request, response);
    });

    router.get('/account/profile', config.auth, function (request, response) {

        // If no user ID exists in the JWT return a 401
        if (!request.payload.id) {
            response.status(401).json({
                "message": "Unauthorized"
            });
        } else {
            // Otherwise continue
            User.findById(request.payload.id)
                .exec(function (err, user) {
                    response.status(200).json(user);
                });
        }

    });

    return router;
};
