"use client";
import { useState } from "react";
import LandingPage from "@/components/landingPage";
import Application from "@/components/App";

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div>
      {!isWalletConnected ? (
        <LandingPage onWalletConnect={() => setIsWalletConnected(true)} />
      ) : (
        <Application />
      )}
    </div>
  );
}
