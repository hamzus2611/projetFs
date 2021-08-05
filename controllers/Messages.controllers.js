const Message = require("../models/Message")



// ---- add messages ---//
exports.addMessages = async (req, res) => {

    const newMessage =await new Message(req.body)
    try {
        newMessage.seve();
        return res.send(newMessage)
    } catch (error) {
        res.status(500).json(error)
    }

}


//---- get messages ----------//


exports.getMessages =async(req,res)=>{
    try {
        const messages =await Message.find({
            conversationId: req.params.conversationId
        });
        return res.send(messages)
    } catch (error) {
        res.status(500).json(error);
    }
}