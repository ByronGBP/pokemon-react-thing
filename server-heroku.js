const express = require('express');
const path = require('path');

const pkg = require('./package.json');
const app = express();

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      const path = 'https://' + req.get('Host') + req.url;
      return res.redirect(path);
    }
    next();
  };
};

app.use(forceSSL());

app.use(express.static(path.join(__dirname)));

app.get('/*', function (req, res) {
  res.sendFile(path.join(path.join(__dirname, '/index.html')));
});

const port = process.env.PORT || 8088;

app.listen(port, () => console.log(pkg.name + ' ' + pkg.version + ' listening on ' + port));
