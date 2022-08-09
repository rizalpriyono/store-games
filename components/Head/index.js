import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <section className="max-w-7xl mx-auto px-10 mt-5 min-h-screen">
      <div className="pt-28 flex items-center">
        <div className="max-w-xl">
          <p className="text-[#7E8CAC] text-lg">Halo gamers,</p>
          <h1
            className="font-bold text-black text-5xl leading-tight mt-3
      "
          >
            Topup & Get a{' '}
            <span
              className="inline-block after:content-[''] after:block after:w-full
          after:h-3 after:relative after:bottom-6 after:opacity-40 after:bg-[#00BAFF]"
            >
              New
            </span>{' '}
            <span
              className="inline-block after:content-[''] after:block after:w-full
          after:h-3 after:relative after:bottom-6 after:opacity-40 after:bg-[#00BAFF]"
            >
              Experience
            </span>{' '}
            in Gaming
          </h1>
          <p className="text-black text-lg mt-3 leading-relaxed">
            Kami menyediakan jutaan cara untuk membantu players menjadi pemenang
            sejati
          </p>
          <div className="flex mt-10">
            <button className="bg-purple py-3 px-10 text-white font-medium rounded-full ">
              Get Started
            </button>
            <button className="py-3 px-10 underline">Learn More</button>
          </div>
        </div>

        <div className="w-full p-5 relative lg:block hidden">
          <div className="absolute z-10 bg-white rounded-xl shadow-xl p-4 top-32 left-20">
            <div className="flex">
              <div className="bg-[url('/img/head-profile.png')] w-12 h-12 bg-cover rounded-full"></div>
              <div className="ml-2">
                <h5 className="font-medium">Shayna Anne</h5>
                <p className="font-light text-sm">Professional Gamer</p>
              </div>
            </div>
            <div className="flex mt-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} className="text-orange-300 w-9" />
              ))}
            </div>
          </div>
          <div className="absolute z-10 bg-white rounded-xl shadow-xl p-5 top-60 right-0">
            <div className="w-20 h-20 bg-[url('/img/head-profile2.png')] bg-cover rounded-full relative">
              <span className="bg-sky-500 px-2 py-1 absolute text-white text-xs rounded-md bottom-0 right-4">
                New
              </span>
            </div>
            <h1 className="text-center font-medium text-sm mt-3">
              Lann Knight
            </h1>
            <p className="text-center font-light text-xs mt-1">Dota 2</p>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-2 max-w-[490px] ml-auto h-[484px]">
            <div className="overflow-hidden rounded-t-3xl bg-[url('/img/head-1.jpg')] bg-cover"></div>
            <div className="overflow-hidden row-span-2 rounded-t-3xl bg-[url('/img/head-2.jpg')] bg-cover"></div>
            <div className="row-span-2 overflow-hidden rounded-b-3xl bg-[url('/img/head-3.jpg')] bg-cover"></div>
            <div className="row-span-1 rounded-b-3xl overflow-hidden bg-[url('/img/head-4.jpg')] bg-cover"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
