import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              'font-kate text-6xl leading-relaxed  font-bold tracking-wider transition-colors text-gray-900 hover:text-sky-500 capitalize dark:text-white'
            }
          >
            <p>ozge</p>
            <p className={'pl-16'}>akarsu</p>
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-between lg:flex-row items-center">
        <div className=" font-raleway flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
          <a
            href="#"
            className={'transition-colors hover:text-yellow-500'}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="#"
            className={'transition-colors hover:text-yellow-500'}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className={'transition-colors hover:text-yellow-500'}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="#"
            className={'transition-colors hover:text-yellow-500'}
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
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
      </div>
    </div>
  );
};

export default Navigation;
