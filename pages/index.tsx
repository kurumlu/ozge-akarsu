import React from 'react';
import type { NextPage } from 'next';
// import About from '../components/about';
import Grid from '../components/grid';

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24 bg-slate-50">
      <main className="max-w-6xl mx-auto mt-16 antialiased">
        <Grid />
        {/* <About /> */}
        <div className="container mx-auto"></div>
      </main>
    </div>
  );
};

export default Home;
