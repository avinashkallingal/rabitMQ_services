const express=require("express")
const bodyPrser=require("body-parser")
const app=express();
const Producer=require("./producer");

const producer=new Producer();


app.use(bodyPrser.json("application/json"))

app.post("/sendLog",async(req,res,next)=>{
await producer.publishMessage(req.body.logType,req.body.message);
res.send();
})

app.listen(3001,()=>{
    console.log("server running on port 3001")
})