const putdata=require('../../frontend/client/data.json')
const { db } = require("./connDB.js");

const {clients}=require('./clients.js')

const senddata=function (){

    clients.create(putdata)
    .then(()=>{
        console.log('Data has been sent to the database');
    })
    .catch((error)=>{
        console.log('error of sending data to database',error)
    })
}
senddata()