"use client"
import Link from "next/link"
import Herobanner from "./ui/Herobanner"
import Hero1 from "./ui/Hero1"
import Products from "./ui/Products"

export default function Hero() {
  return (
    <div>
        <Herobanner />
        <Hero1 />
        <Products />
    </div>
  )
}
