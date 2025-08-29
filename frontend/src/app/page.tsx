"use client";
import { useState } from "react";
import LandingPage from "@/components/landingPage";
import Application from "@/components/App";
import DAOAdmins from "@/components/DAOAdmins";



export default function Home() {
 feature/dao-components-update
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [connectedWallet, setConnectedWallet] = useState("");
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [connectedWallet, setConnectedWallet] = useState<string>("");
 main

  const adminWallets = [
    "0xABC1...DEF9", 
    "0x1234...5678",
    "0x9876...4321",
  ];

  const handleWalletConnect = async () => {
    try {
      const mockWalletAddress = "0xABC1...DEF9";
      
      setConnectedWallet(mockWalletAddress);
      
      const isAdmin = adminWallets.includes(mockWalletAddress);
      
      if (isAdmin) {
        setUserType('admin');
      } else {
        setUserType('user');
      }
      
      setIsWalletConnected(true);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const handleDisconnect = () => {
    setIsWalletConnected(false);
    setUserType(null);
    setConnectedWallet("");
  };

  if (!isWalletConnected) {
    return <LandingPage onWalletConnect={handleWalletConnect} />;
  }

  if (userType === 'admin') {
    return <DAOAdmins onDisconnect={handleDisconnect} walletAddress={connectedWallet} />;
  } else {
    return <Application onDisconnect={handleDisconnect} walletAddress={connectedWallet} />;
  }
}