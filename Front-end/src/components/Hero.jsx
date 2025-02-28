import React from 'react';
import {ShoppingBag} from 'lucide-react';
import {Button} from '@/components/ui/button'

function Hero(props) {
    return (
        
        <section className='relative h-screen flex items-center justify-center overflow-hidden bg-cream'>
            <div className='container mx-auto px-4 z-10'>
                <div className='text-center animate-fadeIn'>
                    <span className='inline-block px-4 py-1 mb-4 text-sm bg-sand rounded-full'>
                        New Collection 2024
                    </span>
                    <h1 className='text-4x1 md:text-6x1 font-serif mb-6'>
                        Timeless Elegance in Every Detail
                    </h1>
                    <p className='text-lg mb-8 max-w-2x1 mx-auto text-gray-600'>
                        Discover our cruated collection of premium handbags, crafted with
                        precision and style for the modern woman.
                    </p>
                    <Button size="lg" className="bg-black text-white hover:bg-gray-900 transition-all duration-300">
                    <ShoppingBag className="mr-2 h-5 w-5"/> Shop NOw
                    </Button>
                </div>
            </div>
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center opacity-10" />
        </section>
    );
}

export default Hero;