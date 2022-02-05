import React from 'react'
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/solid"

const Banner = () => {
    return (
      <div className="relative h-[250px] sm:h-[400px] lg:h-[495px] xl:h-[600px] 2xl:h-[700px]">
        <Image
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
          <button className="text-purple-500 bg-white rounded-full px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            I'm Flexible
          </button>
        </div>

        <div className="absolute h-[50px] w-[50px] bottom-20 right-[650px] bg-transparent text-sm">
          <p className="text-sm">
            <ArrowDownIcon className="hidden md:hidden lg:inline-flex bg-white text-purple-500 rounded-full p-2 animate-bounce" />
          </p>
        </div>
      </div>
    );
}

export default Banner
