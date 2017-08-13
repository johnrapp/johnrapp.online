const versionCookieOptions = {
    expires: new Date(Date.now() + 1000 * 3600 * 24 * 30),
    httpOnly: true
};
module.exports = function assignVersion(req, res) {
    const ip = req.ip;
    const ipHash = hashInt(ip);
    const version = versions[ipHash % versions.length];

    //res.cookie('version', version, versionCookieOptions);

    console.log('Assigned', req.ip, 'to', version);
    return version;
}