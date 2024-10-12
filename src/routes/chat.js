const express = require('express');
const router = express.Router();

router.post('/message', (req, res) => {
    const { message } = req.body;
    console.log('Mensaje recibido:', message);
    res.status(200).json({ message: 'Mensaje recibido', data: message });
});

module.exports = router;
