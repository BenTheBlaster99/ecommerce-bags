import React, { useEffect } from 'react';
import {Hero} from "../components/Hero"
import {FeaturedProducts} from "../components/FeaturedProducts"
import {PopularBrands} from "../components/PopularBrands"
import {BestSellingBags} from "../components/BestSellingBags"
import {AdBanner} from "../components/AdBanner"
import {Categories} from "../components/Categories"
function Index() {
    console.log('index page component rendering');
    useEffect(()=> {
        console.log("Index page mounted");
        return () => console.log("Index page umounted");
        
    })
    
    return (
        <main className='min-h-screen'>
            <Hero/>
            <FeaturedProducts/>
            <PopularBrands/>
            <BestSellingBags/>
            <AdBanner/>
            <Categories/>
        </main>
    );
}

export default Index;