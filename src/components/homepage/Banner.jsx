import { ArrowBigRight, ArrowLeftRight, PlusIcon } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="hero  min-h-[50vh]">
  <div className="hero-content text-center">
    <div className="max-w-xl">
      <h1 className="text-3xl md:text-4xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6 text-gray-600">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
      </p>
                    <button className="btn bg-[#6c8e2b] text-white">
                        <PlusIcon/>Add a Friend</button>
    </div>
  </div>
</div>
    );
};

export default Banner;