const express = require('express');
const getVotes = require('../handlers/get-votes');
const submitVote = require('../handlers/submit-vote');
const getFights = require('../config/Fights');

module.exports = (app) => {
    const router = express.Router();
    
    router.get('/getfights', getFights);
    router.get('/getvotes', getVotes);
    router.post('/submitvote', submitVote);

    app.use(router);
}