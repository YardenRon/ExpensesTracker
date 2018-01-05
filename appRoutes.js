const express = require('express');
const router = express.Router();

router.get('/hello', (request, response) => {
    response.send("Hello World!");
});

module.exports = router;