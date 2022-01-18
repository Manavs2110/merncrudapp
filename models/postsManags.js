const mongoose=require('mongoose')


var postManage =mongoose.model('PostMessage',
{
    title:{type:String},
    message:{type:String}
})

module.exports=postManage