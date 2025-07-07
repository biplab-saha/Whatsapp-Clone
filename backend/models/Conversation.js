const mongoose =require ('mongoose');


const converstionSchema = new mongoose.Schema({
    participants: [{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    lastMessage: {type:mongoose.Schema.Types.ObjectId,ref:'Message'},
    unreadCount:{type:Number,default:0}
},{timestamps:true});


const Conversation = mongoose.model('Conversation',converstionSchema);
module.exports = Conversation;