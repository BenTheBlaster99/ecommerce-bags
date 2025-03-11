import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminDashboard() {
    const [products , setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const fetchProducts = async ()=> {
            try{
                const token = localStorage.getItem("token");
                console.log("token retreived:", token);
                
                const response = await axios.get("/api/products", {
                    headers:{
                        Authorization: token,
                    }
                })
                setProducts(response.data)
            }catch (error){
                console.error("error fetchin products:", error);
                
            }finally {
                setIsLoading(false)
            }
        }
        fetchProducts()
    }, [])
    const handleDeleteProduc = async(productId) =>{
        try{
            await axios.delete(`/api/products/${productId}`,{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            setProducts(products.filter((product)=> product._id !== productId))
        } catch (error){
            console.error("error deleting product:",error);
            
        }
    }
    return (
        <div className='min-h-screen bg-gray-100 p-6'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>Admin Dashboard</h1>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Products</h2>
            {isLoading ?(
                <div className='flex justify-center items-center h-64'>
                    <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {products.map((product)=> (
                        <div key={product._id} className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <h3 className='text-xl font-bold text-gray-800 mb-2'>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}Da</p>
                            <button onClick={()=> handleDeleteProduc(product._id)} className='mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'>
                         Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;