const express = require('express');
const cors = require('cors')
const {Web3} = require('web3');
const ABI =require('./ABI.json')
const socketIO = require('socket.io')
const app = express();
app.use(cors())
app.use(express.json());

const web3 =new Web3('https://eth-sepolia.g.alchemy.com/v2/yWjT9CucXzx08kTNQSDUdPTUraY1AKMt')

const contractAddress = '0xB23fEaf0A57b6C1dCa81bB1205b90072FfeFF8e0';

const contract = new web3.eth.Contract(ABI,contractAddress);

const fetchNFTs = async(account)=>{
    try{
       const nftBalance = await contract.methods.balanceOf(account).call();
       return {userNFTs:Number(nftBalance)}
    }catch(error){
       console.log('Error fetching NFTs',error);
    }
}

app.get("/",(req,res)=>{
  res.send("Hi from server")
})

app.post('/members',async(req,res)=>{
    try{
       const account = req.body.from;
      //  console.log(account)
       const numNFTs = await fetchNFTs(account)

       if(numNFTs.userNFTs>=2){
         res.status(200).json({status:200,numNFTs})
       }else{
         res.status(404).json({status:404,message:"You don't own any nft",numNFTs});
       }
    }catch(error){
        res.status(500).json({status:500,message:"Internal Server Error"});
    }
})

app.post('/webhook',async(req,res)=>{
  try{
    console.log("nft transfered");
    const account = req.body.nftTransfers[0].from;
    const numNFTs = await fetchNFTs(account);
    console.log(numNFTs);
    io.emit('nftsUpdated',{userNFTs:numNFTs.userNFTs})
    res.status(200).json({status:200,message:"Webhook Triggered"})
  }catch(error){
    console.error(error)
  }
})

// import Moralis from 'moralis';

// try {
//   await Moralis.start({
//     apiKey: "YOUR_API_KEY"
//   });

//   const response = Moralis.Streams.addAddress({});

//   console.log(response.raw);
// } catch (e) {
//   console.error(e);
// }



const PORT=5000;
const server = app.listen(PORT,()=>{  
    console.log(`Sever running at ${PORT}`)
})

const io = socketIO(server);
io.on('connection',()=>{
  console.log("Connected")
})