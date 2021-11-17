const express = require('express');
const  controller  = require('../controllers')
const router = express.Router();

router.get('/events', controller.getEventsC);
router.get('/events/event', controller.getEventC);
router.delete('/events/event', controller.deleteEventC);
router.post('/events/event/new', controller.createEventC);
router.put('/events/event', controller.updateEventC);

router.post('/users/user/new', controller.createUserC);

router.post('/matches/match/new', controller.createMatchC);
router.get('/matches', controller.getMatchesC);

module.exports = router;