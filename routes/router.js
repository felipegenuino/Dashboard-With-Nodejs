const express = require('express')
const {viewMain, viewTables, viewNotifications, viewIcons, viewProfile, viewTypography} = require('../controllers/PageControllers.js')

const router = express.Router()

router.get('/', viewMain)
router.get('/tables', viewTables)
router.get('/icons', viewIcons)
router.get('/profile', viewProfile)
router.get('/typography', viewTypography)

router.get('/notifications', viewNotifications)

//para renderizar somente uma página sem layout
router.get('/teste', function(req, res) {
    res.render('tables', { layout: false });
});
  


module.exports = {
    routes: router
}