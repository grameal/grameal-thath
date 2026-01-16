import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { products } from '../lib/data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="text-center py-40">Item not found.</div>;

  return (
    <div className="pb-20">
      <div className="container mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone/50 hover:text-clay mb-8">
          <ArrowLeft size={12} /> Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Image */}
          <div className="aspect-[4/5] bg-[#e5e2dd] w-full sticky top-32">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
          </div>

          {/* Details */}
          <div className="pt-8">
            <span className="text-clay text-xs uppercase tracking-[0.2em] font-bold block mb-4">{product.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-stone mb-6 leading-tight">{product.name}</h1>
            <p className="text-2xl font-serif italic text-stone/60 mb-8">{product.price}</p>
            
            <p className="text-lg leading-relaxed font-light text-stone/80 mb-10 border-l-2 border-clay pl-6">
              {product.description}
            </p>

            <button className="w-full bg-stone text-sand py-5 uppercase tracking-[0.2em] text-xs hover:bg-clay transition-colors duration-300 mb-12">
              Add to Cart
            </button>

            <div className="space-y-6 border-t border-stone/10 pt-8">
              <h4 className="font-serif text-xl">Product Details</h4>
              <ul className="space-y-3">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-stone/60 font-light">
                    <Check size={14} className="text-clay" /> {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;