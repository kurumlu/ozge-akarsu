import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 md:pt-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/">
          <a
            className={
              'font-source font-black text-5xl lg:text-8xl leading-relaxed  font-bold tracking-wider transition-colors text-gray-900 hover:text-pink-500 capitalize dark:text-white'
            }
          >
            <p>Özge Akarsu</p>
            {/*  <p className={'pl-16'}>akarsu</p> */}
          </a>
        </Link>
      </div>
      {/*  IF NAVIGATION MENU IS WANTED THIS CODE CAN BE USED
           <div className="font-raleway font-medium container flex flex-col lg:flex-row justify-between flex-nowrap space-between flex-end items-center mx-auto lg:max-w-4xl">
        <div className="grid gap-4 grid-cols-4">
          <a
            href="#"
            className={'transition-colors hover:text-yellow-500'}
            target="_blank"
            rel="noreferrer"
          >
            DEV
          </a>
          <a
            href="/aboutMe"
            className={'transition-colors hover:text-yellow-500'}
            target="_blank"
            rel="noreferrer"
          >
            ABOUT ME
          </a>
        </div> 
      </div>*/}
    </div>
  );
};

export default Navigation;
