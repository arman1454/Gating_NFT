"use client"
import React from 'react'
const members = () => {
    const address = localStorage.getItem('wallet')
  return (
    <>
      <p>Thank you for being a holder of my NFT collection, here's your message:</p>
      <h1>{address}</h1>
      <img src='./secret.jpg'></img>
    </>
  )
}

export default members
