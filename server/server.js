const express = require('express');
const cors = require('cors')
const {Web3} = require('web3');
const ABI =require('./ABI.json')
const socketIO = require('socket.io')
const app = express();
app.use(cors())
app.use(express.json());


const PORT=3000;
const server = app.listen(PORT,()=>{
    console.log(`Sever running at ${PORT}`)
})

//This is a comment dasdasdasdasda