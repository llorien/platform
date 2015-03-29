'use strict';

var express = require('express');
var _ = require('lodash');

var brithon = require('../framework');

var router = express.Router();

var ns = brithon.ns('brithon.core.routes', {
    init: function() {},

    setup: function(app) {
        var routes = {
            signin: require('./signin'),
            signup: require('./signup')
        };

        _.forEach(routes, function(route) {
            route.setup();
        });

        router.use('/signin', routes.signin.getRouter());
        router.use('/signup', routes.signup.getRouter());
    },

    getRouter: function() {
        return router;
    }
});

module.exports = ns;