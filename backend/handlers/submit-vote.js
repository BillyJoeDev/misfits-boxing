const User = require('../models/user');
const Votes = require('../models/votes');

module.exports = async (req, res) => {
    const {ip, vote} = req.body;

    try {
        var votes = [];
        console.log(ip + " just pushed vote for " + vote);
        console.log(votes.length);
        const possibleUser = await User.findOne({ ipaddress: ip });
        if (!possibleUser) {
            votes.push(vote);
            const user = await User.create({
                ipaddress: ip, 
                votes
            });
            console.log(votes.length);

            if (!user) return res.status(500).send("Could not create user.");
            console.log("Created User: " + ip);
        } else {
            console.log(ip + " just updated a vote");
            votes = possibleUser.UpdateVotes(vote);
        }

        const possibleFighter = await Votes.findOne({ fightername: vote });
        if (possibleFighter) {
            const updatedFighter = possibleFighter.updateVoteCount();
            return res.status(200).send({ votes, updatedFighter });
        } else {
            const fighter = await Votes.create({
                fightername: vote,
                votecount: 1
            });
            return res.status(200).send({ votes, updatedFighter: fighter });
        }
    } catch (err) {
        return res.status(500).send(err.message);
    }
}