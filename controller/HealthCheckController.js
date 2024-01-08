const express = require("express");

const router = express.Router();

router.get(`/`, async (req, res) => {
    return res.status(200).json({ message : `Board elements is running!`})
});

module.exports = router;

