'use client';

import Header from './components/Header';
import Countdown from './components/Countdown';
import Motivation from './components/Motivation';
import Progress from './components/Progress';
import TargetDate from './components/TargetDate';
import DailyMission from './components/DailyMission';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 bg-grid">
      <main className="max-w-2xl mx-auto px-6 py-8 flex flex-col items-center">
        <Header />
        
        <div className="w-full mt-12 sm:mt-16">
          <Countdown />
        </div>
        
        <div className="w-full mt-10 sm:mt-12">
          <Motivation />
        </div>
        
        <div className="w-full mt-12 sm:mt-16">
          <Progress />
        </div>
        
        <div className="w-full mt-12 sm:mt-16">
          <TargetDate />
        </div>
        
        <div className="w-full mt-12 sm:mt-16">
          <DailyMission />
        </div>
        
        <footer className="mt-16 mb-8 text-zinc-700 text-xs text-center w-full">
          Built for focus.
        </footer>
      </main>
    </div>
  );
}
