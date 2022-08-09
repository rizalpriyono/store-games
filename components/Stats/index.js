import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

export default function Stats() {
  const [dataStats] = useState([
    {
      count: '290M+',
      text: 'Players Top Up',
    },
    {
      count: '12.500',
      text: 'Games Available',
    },
    {
      count: '99,9%',
      text: 'Happy Players',
    },
    {
      count: '4.7',
      text: 'Rating Worldwide',
    },
  ]);
  return (
    <section className="max-w-7xl mx-auto px-10 mt-20">
      <div className="flex justify-center flex-wrap divide-y md:divide-x md:divide-y-0 mx-auto">
        {dataStats.map((item, i) => (
          <div
            key={i}
            className="text-black w-72 py-10 px-16 text-center md:text-start"
          >
            <h1 className="text-3xl font-bold">{item.count}</h1>
            <p className="opacity-50">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
