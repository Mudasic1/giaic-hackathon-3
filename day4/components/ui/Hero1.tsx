"use client"

import Image from "next/image"

const ads = [
    {
        id: 1,
        image: "/ads.png",
        name: "Dinning",


    },
    {
        id:2,
        image: "/ad1.png",
        name: "Living"
    },
    {
        id:3,
        name: "Bedroom",
        image: "/ad2.png"
    }
]

export default function Hero1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-10">
        <div className="text-center">
            <h1 className="text-4xl font-bold">Browse The Range</h1>
        </div>
            {/* ads */}
            <div className="flex gap-[70px] mt-10 max-sm:flex-col max-sm:items-center max-sm:justify-center">
                {ads.map((ad) => (
                    <div key={ad.id} className="w-[300px] h-[300px] bg-gray-200 rounded-lg flex flex-col">
                        <Image src={ad.image} alt={ad.name} width={300} height={300} className="w-full h-full object-cover"/>
                        <h1 className="text-center text-xl font-bold">{ad.name}</h1>
                    </div>
                ))}
            </div>
    </div>
  )
}
