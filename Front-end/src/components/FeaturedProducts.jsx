import React, { useEffect } from 'react';
import {Card} from "./ui/Card"

const products = [
    {
        id: 1,
        name: "Hermes mini",
        model: "hamiz",
        price: "1045DDA",
        image: "/lovable-uploads/c5932575-f14b-4fb2-b0ef-479d4527e8aa.png",
        badge: {
          type: "discount",
          text: "20% OFF"
        },
        tag: "Premium"
      },
      {
        id: 2,
        name: "Keyli classic",
        model: "kayle",
        price: "$445DDA",
        image: "/lovable-uploads/c5932575-f14b-4fb2-b0ef-479d4527e8aa.png"
      },
      {
        id: 3,
        name: "Classic Tote",
        model: "total",
        price: "335DDA",
        image: "/lovable-uploads/c5932575-f14b-4fb2-b0ef-479d4527e8aa.png"
      },
      {
        id: 4,
        name: "Elegant Handle",
        model: "elephat",
        price: "225DDA",
        image: "/lovable-uploads/c5932575-f14b-4fb2-b0ef-479d4527e8aa.png"
      }
   
]

function FeaturedProducts(props) {
    console.log('🧩 FeaturedProducts component rendering');

    useEffect(() => {
        console.log('🔄 FeaturedProducts component mounted');
        return () => console.log('🔄 FeaturedProducts component unmounted');
      }, []);
    return (
        <section className='py-20 bg-white'>
            <div className='container max-w-7x1 mx-auto px-4'>
                <div className='flex items-center justify-between mb-12'>
                   <h2 className='text-2xl font-medium'>Popular Collection</h2>
                    <button className='text-sm text-gray-600 hover:text-black transition-colors'>See more</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {products.map((product,index) =>(
                        <div key={product.id} className='animate-fadeIn' style={{animationDelay: `${index * 100}ms`}}>
                            <Card className="relative overflow-hidden group cursor-pointer">
                                <div className='relative aspect-[4/5] overflow-hidden bg-gray-100'>
                                    <img src={product.image} alt={product.name}  className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'/>
                                    { /* Hover details - only show for first 3 items*/}
                                    {index < 3 && (
                                        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white'>
                                            <p className='text-lg font-medium'>{product.name}</p>
                                            <p className='text-sm opacity-80'>{product.model}</p>
                                            <p className='text-lg mt-2'>{product.price}</p>
                                        </div>
                                    )}
                                    { /*Badge */}
                                        {product.badge && (
                                            <div className='absolute bottom-3 left-3 text-white text-sm font-medium'>
                                                {product.badge.text}
                                            </div>
                                        )}
                                    { /*Premium tag */}
                                    {product.tag && (
                                        <div className='absolute bottom-3 left-3 text-white text-sm font-medium'>
                                            {product.tag}
                                        </div>
                                    )}
                                </div>
                                    { /*regular detail - show when not hovering */}
                                <div className='p-4 bg-white'>
                                    <h3 className='font-medium'>{product.name}</h3>
                                    <p className='text-gray-500 mt-1'>{product.price}</p>
                                    <p className='text-lg mt-2'>{product.price}</p>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;