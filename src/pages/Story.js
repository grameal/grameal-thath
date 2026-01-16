import React from 'react';

const Story = () => {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
      <span className="text-clay text-xs uppercase tracking-[0.4em] font-bold">Philosophy</span>
      <h1 className="text-5xl md:text-8xl font-serif text-stone mt-6 mb-12">Roots & Rituals</h1>
      
      <div className="prose prose-lg mx-auto font-light text-stone/70">
        <p className="mb-8 text-xl leading-relaxed">
          Grameal Thath was born from a simple desire: to slow down. In a world optimized for speed, we found ourselves yearning for the weight of a brass lamp, the cool touch of copper, and the grounding scent of Ayurvedic herbs.
        </p>
        <p className="mb-8">
          We traveled across the rural heartlands of India, meeting 4th-generation metalsmiths and herbalists. We realized that true luxury isn't about branding; it's about the time, energy, and soul poured into an object.
        </p>
        <div className="w-24 h-[1px] bg-clay mx-auto my-12"></div>
        <p className="font-serif italic text-2xl text-stone">
          "We craft artifacts for a life well-lived."
        </p>
      </div>
    </div>
  );
};

export default Story;