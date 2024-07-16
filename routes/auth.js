const express = require('express');
const authController = require('../controllers/auth');
const dashboardController = require('../controllers/dashboard');

/*
С помощью класса express.Router можно создавать модульные, монтируемые обработчики
маршрутов. Экземпляр Router представляет собой комплексную систему промежуточных
обработчиков и маршрутизации; по этой причине его часто называют "мини-приложением".
В приведенном ниже примере создается маршрутизатор в виде модуля, в него загружается
функция промежуточной обработки, определяется несколько маршрутов, и модуль
маршрутизатора монтируется в путь в основном приложении.
 */

const router = express.Router();
router.get('/register', authController.registerView);
router.get('/login', authController.loginView);
router.get('/logout', authController.logoutUser);
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;