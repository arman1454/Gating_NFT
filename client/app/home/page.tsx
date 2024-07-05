"use client"

import { useRouter } from "next/navigation"
import { useAppSelector } from "../lib/store/hooks"


const home = () => {
  // const address = useAppSelector(state => state.wallet.account)
  const address = localStorage.getItem('wallet')
  const router = useRouter();
  const logOut = ()=>{
    localStorage.clear()
    router.push('/');
  }

  const addAddress = async()=>{
    const address = localStorage.getItem("wallet")
    const res = await fetch(`http://localhost:5000/addAddress`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({from:address})
       })
    const data = await res.json();   
    console.log(data.msg);
    
  }

  const revealMsg=async()=>{
    try{
       const res = await fetch(`http://localhost:5000/members`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({from:address})
       })
       const data = await res.json();
       if(data.status===200){
        router.push('/members');
       }else{
         window.alert("You currently do not hold any NFTs in collection w/ address 0xd618581402226c92b14c9f4870799b3000ac4c77")
       }
    }catch(error){
       console.error(error)
    }
}
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>Address: {address}</p>
      <br></br>
      <br></br>
      <button onClick={revealMsg}>Reveal Message</button>
      <br />
      <button onClick={logOut}>Log Out</button>
      <button className="pl-12" onClick={addAddress}>Add Address</button>
    </div>
  )
}

export default home
