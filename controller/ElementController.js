const express = require("express");
const ElementService = require("../service/ElementService");

const router = express.Router();

const elementService = new ElementService();

router.get(`/:element_sid`, async (req, res) => {
    const {
        element_sid
    } = req.params;
    const element = await elementService.findById({ sid: element_sid });;
    console.log(" element "+ JSON.stringify(element))
    return res.status(200).json({ element });
});

router.get(`/byBoard/:board_sid`, async (req, res) => {
    const {
        board_sid
    } = req.params;

    const elements = await elementService.findByBoardSid({ board_sid });
    return res.status(200).json({ elements });
});

module.exports = router;

