const Conversation = require("../models/Conversation")

//---------- new conversation -------------//

exports.newconv = async (req, res) => {


    const { SenderId, GroupeId } = await req.body;
    const newConversation = new Conversation({
        members: [SenderId, GroupeId]

    });
    try {
        newConversation.save();
        res.send(newConversation)
    } catch (error) {
        res.status(500).json(error);
    }
}


//---- get conversation for user------//
exports.getconv = async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: {
                $in: [req.params.userId]
            }
        });
        res.status(200).json(conversation)
    } catch (error) {
        res.status(500).json(error)
    }
}