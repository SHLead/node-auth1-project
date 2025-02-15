const router = require('express').Router();
const Users = require('./users-model.js');
const { restricted } = require('../auth/auth-middleware');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(err => res.send(err));
});

module.exports = router;
