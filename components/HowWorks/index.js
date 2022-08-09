import React, { useState } from 'react';

export default function HowWorks() {
  const [howWorks] = useState([
    {
      icon: "bg-[url('/icon/start.svg')]",
      title: '1. Start',
      desc: 'Pilih salah satu game yang ingin kamu top up',
    },
    {
      icon: "bg-[url('/icon/fillup.svg')]",
      title: '2. Fill Up',
      desc: 'Top up sesuai dengan nominal yang sudah tersedia',
    },
    {
      icon: "bg-[url('/icon/winner.svg')]",
      title: '3. Be a Winner',
      desc: 'Siap digunakan untuk improve permainan kamu',
    },
  ]);
  return (
    <section className="max-w-7xl mx-auto px-10 mt-28">
      <div>
        <h1 className="text-black text-3xl font-bold text-center mx-auto whitespace-pre-line leading-relaxed">
          It’s Really That {'\n'} Easy to Win the Game
        </h1>
        <div className="flex gap-6 mt-10 justify-center flex-wrap">
          {howWorks.map((item, i) => (
            <div
              key={i}
              className="bg-[#F9FAFF] rounded-2xl p-7 max-w-sm text-black"
            >
              <div className={`w-20 h-20 ${item.icon}`}></div>
              <h1 className="font-semibold text-lg mt-5">{item.title}</h1>
              <p className="mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
