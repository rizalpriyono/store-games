import React, { useState } from 'react';

export default function Footer() {
  const [listItem] = useState([
    {
      header: 'Company',
      content: [
        'About Us',
        'Press Release',
        'Terms of Use',
        'Privacy & Policy',
      ],
    },
    {
      header: 'Support',
      content: ['Refund Policy', 'Unlock Rewards', 'Live Chatting'],
    },
    {
      header: 'Connect',
      content: [
        'Connect',
        'team@store.gg',
        'Pasific 12, Jakarta Selatan',
        '021 - 1122 - 9090',
      ],
    },
  ]);
  return (
    <section className="bg-[#F9FAFF] py-20 px-20 xl:px-32 mt-28">
      <div className="flex text-black flex-wrap gap-10">
        <div>
          <img src="/logo.svg" alt="logo" />
          <p className="max-w-[344px] mt-5">
            StoreGG membantu gamers untuk menjadi pemenang sejati
          </p>
          <p className="mt-10">Copyright 2021. All Rights Reserved.</p>
        </div>

        <div className="flex ml-auto flex-wrap gap-10">
          {listItem.map((item, i) => (
            <div key={i} className="w-52">
              <h1 className="text-lg font-semibold">{item.header}</h1>
              {item.content.map((item, i) => (
                <p
                  key={i}
                  className="mt-4 cursor-pointer hover:underline hover:text-purple transition-all"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
