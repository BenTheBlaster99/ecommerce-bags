import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create CartContext
export const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //load cart from localstorage on initian render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    console.log('hello');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  //clearing the entire cart
  const clearCart = () => {
    setCart([]);
  };
  //calculating total number of items in the cart

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  //total price of itmes in cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  //sync cart with backend => preparing for logged in users
  const synceCartWithBackend = async (userId) =>{
    try{
      await axios.post(`http://localhost:5000/users/${userId}/cart`, {cart})
    } catch (err){
      console.error("failed to synce cart with backend:",err);
      
    }
  }

  // Provide cart state and functions to children
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity,clearCart,getCartItemCount,getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
