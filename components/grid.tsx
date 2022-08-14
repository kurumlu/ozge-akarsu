import React from 'react';
import Image from 'next/image';
import bir from '../public/images/1.png';
import iki from '../public/images/2.png';
import uc from '../public/images/3.png';
import dort from '../public/images/4.png';
// import koyun from '../public/images/koyun.jpg';
// import bayan from '../public/images/bayan.jpg';

const Grid = () => {
  const renderGridElement = (href: string, title: string, imageSource: any) => (
    <div className="border border-white  border-l-black  h-80 lg:h-128 relative">
      <div className="mt-8 lg:mt-12 lg:pr-4 mb-10 pl-1 w-2/5">
        <Image
          src={imageSource}
          alt="ProfBirile"
          priority={true}
          placeholder="blur"
        />
      </div>
      {/* <div className={'hover:animate-bounce'}> */}
      <div>
        <a
          href={href}
          className={
            'transition-colors uppercase font-bold text-red-700 hover:text-black pl-2 ml-1'
          }
          target="_blank"
          rel="noreferrer"
        >
          {title} <span className={'ml-1 invisible lg:visible'}>.........</span>
        </a>
        <div className={'text-xxs lg:text-xs ml-2 my-0.5'}>
          something short or not
        </div>
        <div className={'h-1.5 bg-black  rounded px-1'}></div>
        <div className={'text-xxs lg:text-xs  ml-2 mt-2'}>
          alle goedheiden aan de anderen geeft en niets bewaard voor zichzelf
        </div>
        <div className={'text-xxs lg:text-xs ml-2 mt-2'}>
          alle goedheiden aan de anderen geeft en niets bewaard voor zichzelf
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-playfair text-sm container mx-auto lg:max-w-4xl">
      <div className="grid grid-cols-4 gap-4 min-h-60">
        {renderGridElement('/aboutMe', 'About me', bir)}
        {renderGridElement('#', 'Animations', iki)}
        {renderGridElement('#', 'Gifs / Illustrations', uc)}
        {renderGridElement('#', 'Paintings', dort)}
      </div>
    </div>
  );
};

export default Grid;
