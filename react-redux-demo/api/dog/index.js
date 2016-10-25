let express = require('express');
let router = express.Router();

let controller = require('./dog.controller.js');

router.get('/', controller.list);
router.post('/', controller.save);
router.delete('/:id', controller.delete);

module.exports = router;