"use client"

import { useAppSelector } from "../lib/store/hooks"


const home = () => {
  const address = useAppSelector(state => state.wallet.account)
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>Address: {address}</p>
      <br></br>
      <br></br>
      <button onClick={revealMsg}>Reveal Message</button>
    </div>
  )
}

export default home
