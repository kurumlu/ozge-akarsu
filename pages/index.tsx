import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about';

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
        <div className="container mx-auto"></div>
      </main>
    </div>
  );
};

export default Home;
