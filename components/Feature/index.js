import React, { useState } from 'react';

export default function Feature() {
  const [listGame] = useState([
    {
      name: 'Genshin Impact',
      platform: 'PC / Mobile',
      image: "bg-[url('/img/games-featured/games-1.png')]",
    },
    {
      name: 'Valorant',
      platform: 'PC',
      image: "bg-[url('/img/games-featured/games-2.png')]",
    },
    {
      name: 'Mobile Legend',
      platform: 'Mobile',
      image: "bg-[url('/img/games-featured/games-3.png')]",
    },
    {
      name: 'PUBG Mobile',
      platform: 'Mobile',
      image: "bg-[url('/img/games-featured/games-4.png')]",
    },
    {
      name: 'FIFA Mobile',
      platform: 'Mobile',
      image: "bg-[url('/img/games-featured/games-5.png')]",
    },
    // {
    //   name: 'Wild Rift',
    //   platform: 'PC / Mobile',
    //   image: "bg-[url('/img/games-featured/games-6.png')]",
    // },
  ]);
  return (
    <section className="max-w-7xl mx-auto mt-28 pb-20 px-10">
      <div>
        <h1 className="font-bold text-black text-3xl max-w-[270px] leading-relaxed">
          Our Featured Games This Year
        </h1>
        <div className="flex mt-10 gap-5 justify-between flex-wrap">
          {listGame.map((item, i) => (
            <div
              key={i}
              className="w-full sm:w-[205px] h-[270px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className={`w-full h-full ${item.image} bg-cover`}>
                <div className="opacity-0 group-hover:opacity-100 w-full h-full text-white bg-black/50 backdrop-blur-sm transition-all duration-300 p-8">
                  <img
                    src="/icon/game.svg"
                    alt="icongame"
                    className="mx-auto mt-10"
                  />
                  <h1 className="text-center font-medium mt-10 text-lg">
                    {item.name}
                  </h1>
                  <p className="text-center font-light mt-1">{item.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
