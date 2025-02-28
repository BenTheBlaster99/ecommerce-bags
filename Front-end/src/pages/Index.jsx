import React from 'react';
import {Hero} from "@/components/Hero"
import {FeaturedProducts} from "@/components/FeaturedProducts"
import {PopularBrands} from "@/components/PopularBrands"
import {BestSellingBags} from "@/components/BestSellingBags"
import {AdBanner} from "@/components/AdBanner"
import {Categories} from "@/components/Categories"
function Index() {
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