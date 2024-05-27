"use client"
import { useRouter } from "next/navigation";
import { useAppDispatch } from "./lib/store/hooks";
import { setAccount } from "./lib/store/features/wallet/walletSlice";

export default function Index() {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        dispatch(setAccount(accounts[0]))
        router.push('/home');
      } else {
        alert("Install Metamask");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}
