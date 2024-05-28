"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import  io  from 'socket.io-client';
const members = () => {
  const [socket,setSocket]=useState<any>(null);
  const address = localStorage.getItem('wallet')
  const router = useRouter();
  useEffect(()=>{
    const socket = io('http://localhost:5000');
    if(socket){
    setSocket(socket);
    }
    return()=>{
      socket.disconnect()
    }
  },[])

  useEffect(()=>{
    if(socket){
      socket.on('nftsUpdated',(data)=>{
        console.log(data.userNFTs);
        
        if(data.userNFTs<4){
           router.push('/home')
           alert("you don't hold the requirements of viewing it Logging out")
        }
      })
    }
  },[socket])
  return (
    <>
      <p>Thank you for being a holder of my NFT collection, here's your message:</p>
      <h1>{address}</h1>
      <img src='./secret.jpg'></img>
    </>
  )
}

export default members
