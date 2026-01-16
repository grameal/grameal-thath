import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../lib/data';

const Shop = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <h1 className="text-5xl md:text-7xl font-serif text-stone mb-12">Collection</h1>
        
        {/* Filters */}
        <div className="flex gap-8 border-b border-stone/10 pb-4 mb-12 overflow-x-auto">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${
                filter === cat ? 'text-clay font-bold' : 'text-stone/40 hover:text-stone'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="group">
              <div className="aspect-[3/4] bg-[#e5e2dd] overflow-hidden mb-6 relative">
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif text-stone group-hover:text-clay transition-colors">{item.name}</h3>
                  <p className="text-sm text-stone/50 font-light mt-1">{item.tagline}</p>
                </div>
                <span className="text-sm font-serif italic">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;