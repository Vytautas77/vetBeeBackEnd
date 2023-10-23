const express = require("express");
const router = express.Router();
const { GET_ALL_PETS, ADD_PET, UPDATE_PET } = require("../controller/vetBee");

router.get("/pets", GET_ALL_PETS);
router.post("/pets", ADD_PET);
router.put("/pets/:id", UPDATE_PET);

module.exports = router;
