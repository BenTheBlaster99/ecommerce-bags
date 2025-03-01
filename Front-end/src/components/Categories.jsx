import React from "react";
import {Separator} from "./ui/separator";


const collections = [
  {
    id: 1,
    name: "",
    description: "",
    image: ""
  },
  {
    id: 2,
    name: "",
    description: "",
    image: "",
  }
]

function Categories() {
  return (
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8">Collection list</h2>
          <div className="grid cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
    {collections.map((collection, index)=>(
      <div key={collection.id} className="relative">
        <Card className="overflow-hidden group cursor-pointer">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={collection.image} alt={collection.name} className="object-cover w-full h-full"/>
            {/* overlay with text*/}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h3 className="text-2x1 font-bold">{collection.name}</h3>
              {collection.description && (
                <p className="text-sm mt-1">{collection.description}</p>
              )}
            </div>
            {/*view more button (only on first item) */}
            {index === 0 && (
              <div className="absolute bottom-4 left-4">
                <button className="bg-white text-black px-4 py-2 text-sm">
                  View more
                </button>
              </div>
            )}
          </div>
        </Card>
      </div>
    ))}
          </div>
          {/*black tape separator */}
          <div className="w-full overflow-hidden">
            <Separator className="bg-black h-[2px]"/>
          </div>
          {/*Footer */}
          <footer className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-3xl font-bold tracking-widest mb-6">SOVARA</h2>
              <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-800 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-800 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path><path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path d="M15 8v4a4 4 0 0 1-4 4"></path><line x1="9" x2="9" y1="12" y2="20"></line><line x1="15" x2="15" y1="0" y2="8"></line></svg>
              </a>
              <a href="#" className="text-gray-800 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </a>
                
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-black">Track your order</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black"> About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">Help & FAQs</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black">Contact Us</a></li>
              </ul>
            </div>
          </footer>
          <div className="py-4 text-sm text-gray-600 flex justify-end space-x-4">
            <a href="#" className="hover:text-black"></a>
            <span>|</span>
            <a href="#" className="hover:text-black"></a>
          </div>
        </div>
      </section>
  );
}

export default Categories;
