import React from 'react';
import Image from 'next/image';
import bir from '../public/images/1.png';
import iki from '../public/images/2.png';
import uc from '../public/images/3.png';
import dort from '../public/images/4.png';
// import koyun from '../public/images/koyun.jpg';
// import bayan from '../public/images/bayan.jpg';

const Grid = () => {
  const renderGridElement = (
    href: string,
    title: string,
    imageSource: any,
    secondTitle = ''
  ) => (
    <div className="border border-slate-50 border-l-black last:border-r-black h-80 lg:h-max relative">
      <div className="h-full">
        <div className="text-lg font-black pl-2 pt-2 pb-36">PART</div>
        {/* <div className="h-max">  */}
        <div
          style={{
            position: 'relative',
            maxHeight: '350px',
            height: '350px',
            maxWidth: '350px',
            width: '350px',
          }}
        >
          {/* <div className="mt-8 lg:mt-12 lg:pr-4 mb-10 pl-1 w-2/5"> */}
          <Image
            src={imageSource}
            layout="fixed"
            height="350"
            width="66"
            alt="ProfBirile"
            priority={true}
            placeholder="blur"
          />
        </div>
        {/*         </div> */}
      </div>

      {/* <div className={'hover:animate-bounce'}> */}
      <div>
        <a
          href={href}
          className={
            'transition-colors  font-bold text-pink-500 hover:text-black pl-2 ml-1 text-xs lg:text-base'
          }
          target="_blank"
          rel="noreferrer"
        >
          {title}
          {secondTitle ? <div className="ml-4">{secondTitle}</div> : null}
        </a>
        <div className={'text-xxs lg:text-xs ml-2 my-0.5'}>
          something short or not
        </div>
        <div className={'h-1.5 bg-black  rounded px-1'}></div>
        {/* text-justify */}
        <div className={'text-xxs lg:text-xs mx-2 mt-2'}>
          alle goedheiden aan de anderen geeft en niets bewaard voor zichzelf
        </div>
        {/* text-justify */}
        <div className={'text-xxs lg:text-xs mx-2 mt-2'}>
          alle goedheiden aan de anderen geeft en niets bewaard voor zichzelf
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-sm container mx-auto">
      <div className="grid grid-cols-5 gap-4">
        {renderGridElement('/aboutMe', 'Aboutme', bir)}
        {renderGridElement('#', 'Films', iki)}
        {renderGridElement('#', 'Gifs ', uc)}
        {renderGridElement('#', 'Paintings', dort, 'Illustrations')}
        {renderGridElement('#', 'Contact ', uc)}
      </div>
    </div>
  );
};

export default Grid;
