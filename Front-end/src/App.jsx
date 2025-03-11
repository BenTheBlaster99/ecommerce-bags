import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Productdetails from "./pages/Productdetails";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation"
import { CartProvider } from "./context/CartContext"; 
import "./App.css";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CreateProduct from "./pages/CreateProduct";


function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          {/*main content */}
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Productdetails/>}/> {/** add route for product */}
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/confirmation" element={<Confirmation/>}/>
            <Route path="/admin/login" element={<AdminLogin/>}/>
            <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route path="/admin/create-product" element={<CreateProduct/>}/>
          </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
