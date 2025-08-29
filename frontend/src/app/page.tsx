import HeroSection from "@/components/heroSection";
import HeroSection2 from "@/components/heroSection2";
import NavBar from "@/components/navBar";
import Image from "next/image";


export default function Home() {
  return (
    <div>
     <NavBar/>
     <HeroSection />
     <HeroSection2/>
    </div>
  );
}
