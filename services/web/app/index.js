const express = require('express');
const path = require('path');
const versions = require('./versions');

const rootDir = require('../root-dir');
const publicDir = path.join(rootDir, 'public');
const hashInt = require('./hash-int');

module.exports = function(app) {
    const router = express.Router({ strict: true });
    bindRoutes(router);
    app.use(router);
}

function bindRoutes(router) {
    router.get('/', (req, res) => {
        let { version = assignVersion(req, res) } = req.cookies;
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

    const versionCookieOptions = {
        expires: new Date(Date.now() + 1000 * 3600 * 24 * 30),
        httpOnly: true
    };
    function assignVersion(req, res) {
        const ip = req.ip;
        const ipHash = hashInt(ip);
        const version = versions[ipHash % versions.length];

        //res.cookie('version', version, versionCookieOptions);

        console.log('Assigned', req.ip, 'to', version);
        return version;
    }
    
}