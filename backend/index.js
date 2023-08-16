const express = require('express');
const cors =require('cors'); 


const port = 3001;
const app = express();

const {getAllCleint,add} = require('./mongoDB/connDB.js')


app.use(cors());
app.use(express.json())

app.get("/server/clients",(request,respond)=>{
    getAllCleint()
    .then((result)=>{
         respond.status(200).send(result)
         })
    .catch((err)=>{
        respond.status(500).send(err)
    })     
})

app.post("/server/addclient",(request,respond)=>{
    add(request.body)
    .then((result)=>{
        respond.status(201).send(result)
    })
    .catch((err)=>{
        respond.status(500).send(err)
    })
})




app.listen(port, ()=>{
    console.log(`listening on ${port}`);
    })