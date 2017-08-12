const express = require('express');
const path = require('path');
const versions = require('./versions');

const rootDir = require('../root-dir');
const publicDir = path.join(rootDir, 'public');

module.exports = function(app) {
    const router = express.Router({ strict: true });
    bindRoutes(router);
    app.use(router);
}

function bindRoutes(router) {
    router.get('/', (req, res) => {
        let { version = assignVersion(req) } = req.cookies;
        sendVersion(version, res);
    });

    versions.forEach(version => {
        router.get(`/${version}`, (req, res) => {
            sendVersion(version, res);
        });
        router.get(`/${version}`, (req, res) => {
            sendVersion(version, res);
        });
        router.get(`/${version}/`, (req, res) => {
            res.redirect(`/${version}`);
        });
        // router.get(`/${version}/**`, (req, res) => {
        //     console.log('/version/**')
        //     return res.send(req.url);
        //     res.sendFile(path.join(publicDir, req.url));
        // });
    });

    function sendVersion(version, res) {
        res.sendFile(path.join(publicDir, `${version}.html`));
    }

    function assignVersion(req) {
        return 'shitty';
    }
}