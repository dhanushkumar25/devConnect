
const mongoose = require('mongoose');

const connectionRequestSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["ignore", "interested", "accepted", "rejected"],
            message: `{VALUE} is incorrect status type`
        }
    }

}, {
    timestamps: true,
});


// Create a compound index on (fromUserId, toUserId) to quickly check for existing requests 
// and prevent duplicate connection requests between the same two users.
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1});

// This method is called everytime before saving request to DB
connectionRequestSchema.pre("save", function(next) {
    const connectionRequest = this;
    // Check if the fromUserId is same as toUserId
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
        throw new Error("Cannot send connection request to yourself!");
    }
    next();
});

const  ConnectionRequestModel = new mongoose.model("ConnectionRequest", connectionRequestSchema)

module.exports = ConnectionRequestModel;