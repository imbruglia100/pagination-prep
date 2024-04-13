const express = require("express");
const router = express.Router();
const { Pet } = require('../db/models');
const e = require("express");

router.get('/', async (req, res, next) => {
    const { page, size } = req.query

    let p = +page || 1
    let s = +size || 5

    let offset = s * (p - 1);
    let limit = s;

    const pets = await Pet.findAll({
        offset,
        limit
    })

    res.json({Pets: pets})
})

module.exports = router;
