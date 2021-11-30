const io = require("socket.io")
(8900, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  let users = [];

 const addUser = (userId, socketId) => {

   !users.some((user) =>   user.userId === userId) &&
     users.push({ userId, socketId });
    
 };
 

 const removeUser = (socketId) => {
   users = users.filter((user) => user.socketId !== socketId);
 };

 const getUser = (userId) => {
   return users.find((user) => user.userId === userId);
 };

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");
 

  //take userId and socketId from user
   socket.on("addUser", (userId) => {
     if(userId!== null){
     addUser(userId, socket.id);
    }
     io.emit("getUsers", users);
   });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
     const user = getUser(receiverId);
     if(user!== undefined){
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
     }
     
   });

   //send and get Answer notification
 
  socket.on('Notification', ({spname, customerId, body})=>{
    const user = getUser(customerId);

    console.log(body);
 
    if(user!==undefined){
      io.to(user.socketId).emit("getNotification", {
        spname,
        body,
      });
    }
   
  });
     //send and get Vote notification
  socket.on('VoteNotification', ({customer_name, spId})=>{

   console.log(spId._id);
    const user = getUser(spId._id);
    console.log( "userID and SocketID"+ user);
    if(user!==undefined){
     io.to(user.socketId).emit("sendNotification", {
      customer_name,
      spId,
    });  
  }
 });

 // send and get new job notification

 socket.on('NewJobNotification', ({serviceProviders})=>{

  let users = [];
  var sockets=[];
  for(var i = 0;i<serviceProviders.length;i++){
   var usersID= serviceProviders[i]._id;
    users.push(usersID);
    console.log(users[i]);
    var user=  getUser(users[i]); 
    console.log(user);
    
     if(i!==undefined && users[i]!==undefined){
  
      
       sockets.push(user);

      io.to(sockets[i].socketId).emit("sendJobNotification", "New JOB"); 
      console.log(sockets[i].socketId);
   
      console.log("Emitted");
     } 
}

 });
 
  //when disconnect
   socket.on("disconnect", () => {
     console.log("a user disconnected!");
     removeUser(socket.id);
     io.emit("getUsers", users);
   });
});