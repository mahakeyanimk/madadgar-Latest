const router = require("express").Router();
const Conversation = require("../model/Conversation");



//new Conversation
router.post("/conversation", async (req,res)=>{
  var body = req.body;
  console.log(body);
  if (Object.keys(body).length > 0) {
    var {
      members
    } = req.body;
    console.log(req.body);
    var existingConversation = await Conversation.findOne({ members:members});
    if (existingConversation==null) {
    
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    });
   
    try{
      
       const savedConversation = await newConversation.save();
       res.status(200).json(savedConversation);
      
    }catch(err){
        res.status(500).json(err)
    }
  }
  else{
    resStatusAndMessage(res, 409, "Chat Already  exist");
  }
 }
 else {
  resStatusAndMessage(res, 400, "Error: Empty body");
}
}); 
//get conv of a user

router.get("/conversation/:userId", async (req, res) => {
    try {
      const conversation = await Conversation.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports= router;
