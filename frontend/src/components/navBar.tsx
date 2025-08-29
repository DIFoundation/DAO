"use client";
import  shorten  from "./shortner";
import Link from 'next/link'

// type Props = {
//   address: string;
 // { address }: Props
// };

export default function NavBar() {
    // const userAddress = shorten(address);
  return (
    <nav className="fixed w-full p-4 shadow-2xl bg-purple-950 top-0 left-0 flex justify-between">
      <div>
 <h2 className="text-lg font-bold">Logo</h2>
      </div>
     <ul className="flex gap-4 ">
        <li> <Link href="/blog">Blog</Link> </li>
        <li> <Link href="/about">About Us</Link> </li>
        <li> <Link href="/contact">Contact Us</Link> </li>
     </ul>
      <p className="md:px-4 py-2 text-xs md:text-sm px-1 cursor-pointer rounded-lg font-bold bg-white text-purple-700 ">Connect Wallet</p>
    </nav>
  );
}