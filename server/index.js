const express=require('express')
const cors=require('cors')
const app=express()
const PORT='3001'
const mongoose=require('mongoose')
const FriendModel=require('./models/friends')
//database connection
mongoose.connect("mongodb://localhost:27017/mern_app?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {useNewUrlParser:true})
//create friend
app.get('/insert',async(req,res)=>{
    const friend=new FriendModel({
        name:"Jessica",
        age:38
    })
    await friend.save()
    res.send('Data Inserted Successfully')
})
//fetch friends
app.get('/read',async(req,res)=>{
    FriendModel.find({}).then(result => {
       res.send(result);
      })
      .catch(err => {
        res.send(err);
      });
})
//app starting
app.listen(PORT,()=>{
    console.log('server running ...')
})