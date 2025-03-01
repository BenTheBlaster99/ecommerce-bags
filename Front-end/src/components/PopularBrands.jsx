import { useEffect } from "react";
import {Card} from "./ui/Card";
const brands = [
    { id: 1, name: "DIOR" , logo:""},
    { id: 2, name: "Louis Vuitton" , logo:""},
    { id: 3, name: "GUCCI" , logo:""},
    { id: 4, name: "HERMÈS" , logo:""},
    { id: 5, name: "ZARA" , logo:""},
    { id: 6, name: "CHANEL" , logo:""},
    { id: 7, name: "DOLCE & GABBANA" , logo:""},
    { id: 8, name: "PRADA" , logo:""},
    { id: 9, name: "FENDI" , logo:""},
    { id: 10, name: "BALENCIAGA" , logo:""},
]




function PopularBrands(props) {
    console.log('🧩 PopularBrands component rendering');
    useEffect(() => {
        console.log('🔄 PopularBrands component mounted');
        return () => console.log('🔄 PopularBrands component unmounted');
      }, []);
    return (
       <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-medium mb-8">Popular brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {brands.map((brand)=> (
                        <Card key={brand.id} className="flex items-center justify-center p-6 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">

                <div className="h-12 flex items-center justify-center">
                    <span className="text-xl font-bold">{brand.name}</span>
                </div>
                    </Card>
                ))}
            </div>
        </div>
       </section>
    );
}

export default PopularBrands;