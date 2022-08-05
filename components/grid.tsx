import React from 'react';
import Image from 'next/image';
import bir from '../public/images/bir.png';
import iki from '../public/images/iki.png';
import uc from '../public/images/uc.png';
import dort from '../public/images/dort.png';
import koyun from '../public/images/koyun.jpg';
import bayan from '../public/images/bayan.jpg';

const Grid = () => {
  const renderGridElement = (href: string, title: string, imageSource: any) => (
    <div className=" border border-white  border-l-black  h-128 relative">
      <div className="lg:mt-12 lg:pr-4 mb-10 pl-1">
        <Image
          src={imageSource}
          alt="ProfBirile"
          className="rounded-full"
          priority={true}
          placeholder="blur"
        />
      </div>
      <div className={'hover:animate-bounce'}>
        <a
          href={href}
          className={'transition-colors hover:text-red-700 pl-2'}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
        <div className={'h-1.5 bg-red-700 rounded px-1'}></div>
      </div>
    </div>
  );

  return (
    <div className="font-zilla text-xl container mx-auto lg:max-w-4xl">
      <div className="grid grid-cols-4 gap-4 min-h-60">
        {renderGridElement('/aboutMe', 'About me', bayan)}
        {renderGridElement('#', 'Animations', koyun)}
        {renderGridElement('#', 'Gifs / Illustrations', uc)}
        {renderGridElement('#', 'Paintings', dort)}
      </div>
    </div>
  );
};

export default Grid;
