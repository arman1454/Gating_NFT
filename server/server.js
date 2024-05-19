const express = require('express');
const cors = require('cors')
const {Web3} = require('web3');
const ABI =require('./ABI.json')
const socketIO = require('socket.io')
const app = express();
app.use(cors())
app.use(express.json());

const web3 =new Web3('YOUR API KEY')

const contractAddress = 'YOUR CONTRACT ADDRESS';

const contract = new web3.eth.Contract(ABI,contractAddress);

const fetchNFTs = async(account)=>{
    try{
       const nftBalance = await contract.methods.balanceOf(account).call();
       return {userNFTs:Number(nftBalance)}
    }catch(error){
       console.log('Error fetching NFTs',error);
    }
}



const PORT=3000;
const server = app.listen(PORT,()=>{
    console.log(`Sever running at ${PORT}`)
})