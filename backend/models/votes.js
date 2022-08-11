const mongoose = require('mongoose');
require('dotenv/config');

const votesSchema = mongoose.Schema({
    fightername: {
        type: String,
        required: true
    },
    votecount: {
        type: Number,
        default: 0
    }
});


votesSchema.methods.updateVoteCount = function() {
    this.votecount++;
    this.save();
    return { fighername: this.fighername, votecount: this.votecount };
}

const Votes = mongoose.model('Votes', votesSchema);
module.exports = Votes;