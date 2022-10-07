const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff-ctrl");

router.get("/", stuffCtrl.sayHello);

module.exports = router;
