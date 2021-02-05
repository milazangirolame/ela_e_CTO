const express = require('express');
const router = express.Router();
const controller = require("../controller/bandasController");

router.get('/', controller.listarTodasBrandas);
router.get('/banda_preferida', controller.retornaBandaPreferida);
