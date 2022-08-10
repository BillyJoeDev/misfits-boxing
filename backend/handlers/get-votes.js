const User = require('../models/user');
const Votes = require('../models/votes');

module.exports = async (req, res) => {
    const ipaddress = req.headers.ipaddress;
    if (ipaddress == "" || ipaddress == undefined) return res.status(400).json({err: "No IP address provided."});

    const possibleUser = await User.findOne({ ipaddress });
    var votes = [];
    if (possibleUser) 
        votes = possibleUser.GetVotes();

    const voteCounts = await Votes.find();
    return res.status(200).json({ votes: votes, voteCounts: voteCounts });
}