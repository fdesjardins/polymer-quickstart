var fs = require('fs');
var secrets = require('./secrets');

module.exports = {

  locals: {
    application: 'Polymer Starter Kit',
    shortname: 'polymer-starter',
    version: '0.0.0',
    description: 'Holy components Batman'
  },

  server: {
    address: '0.0.0.0',
    port: process.env.PORT || 3333,
    // express: {
    //   key: fs.readFileSync(__dirname + '/ssl/dev/ca.key'),
    //   cert: fs.readFileSync(__dirname + '/ssl/dev/ca.crt'),
    //   ca: fs.readFileSync(__dirname + '/ssl/dev/ca.csr')
    // },
    session: {
      secret: secrets.server.session.secret
    },
    cookie: {
      secret: secrets.server.cookie.secret
    }
  }
};
