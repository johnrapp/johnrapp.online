const versionCookieOptions = {
    expires: false,
    httpOnly: true
};
module.exports = function assignVersion(req, res) {
    const version = determineVersion(req);

    res.cookie('version', version, versionCookieOptions);

    console.log('Assigned', req.ip, 'to', version);
    return version;
}

function determineVersion(req) {
    const index = Math.floor(Math.random() * versions.length);
    return versions[index];
}