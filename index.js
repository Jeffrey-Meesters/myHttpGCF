// https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/functions
const escapeHtml = require('escape-html');

exports.helloHttp = (req, res) => {
    res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
};
