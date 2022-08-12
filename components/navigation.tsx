import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:pt-6 md:mb-6  bg-slate-50 dark:bg-black">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/">
          <a
            className={
              'font-raleway text-3xl lg:text-5xl leading-relaxed  font-bold tracking-wider transition-colors text-gray-900 hover:text-red-700 capitalize dark:text-white'
            }
          >
            <p>Özge Akarsu</p>
            {/*  <p className={'pl-16'}>akarsu</p> */}
          </a>
        </Link>
      </div>
      {/*  IF NAVIGATION MENU WANTED THIS CODE CAN BE USED
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
