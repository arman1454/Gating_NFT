"use client"
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' });
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
