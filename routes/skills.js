var express = require('express');
var router = express.Router();
const skillControllers = require('../controllers/skills')

/* GET users listing. */

// todis/ becaue we have to munt in server server.js as /todos
router.get('/', skillControllers.index);
router.get('/new', skillControllers.new);
router.get('/:id', skillControllers.show);
router.post('/', skillControllers.create);
router.delete('/:id', skillControllers.delete);

module.exports = router;
