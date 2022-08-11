const mongoose = require('mongoose');
require('dotenv/config');

const userSchema = mongoose.Schema({
    ipaddress: {
        type: String,
        required: [true, "Please provide a ip address"],
        unique: true
    },
    votes: {
        type: [String],
        default: [],
        required: false
    }
});

userSchema.methods.GetVotes = function() {
    return this.votes;
}

userSchema.methods.UpdateVotes = function(vote) {
    if (this.votes.indexOf(vote) <= -1) {
        this.votes.push(vote);
        this.save();
    }

    return this.votes;
}

const User = mongoose.model('Users', userSchema);
module.exports = User;