const express = require('express');
const router = express.Router();

// router.METHOD(caminho, handler);
router.get('/', handlers:(request, response) => {
  response.send("Hello world");

});

module.exports = router;
