import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {

  const {cart, removeFromCart, updateQuantity} =useContext(CartContext)

  const navigate = useNavigate();
  // State for form data
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    wilaya: "",
    note: "",
  });

  // Cart items (replace with real cart data later)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Kelly 2002 mini",
      price: 10450,
      color: "pink",
      quantity: 1,
    },
    {
      id: 2,
      name: "Chanel Flap Bag",
      price: 9950,
      color: "black",
      quantity: 1,
    },
  ]);

  const wilayas = [
    "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira",
    "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Algiers", "Djelfa", "Jijel", "Sétif", "Saïda",
    "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla",
    "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
    "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane",
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle quantity changes for cart items
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Check if the form is valid
  const isFormValid = () => {
    const isValid =
      formData.fullName.trim() !== "" &&
      formData.phoneNumber.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.wilaya.trim() !== "";
    console.log("Is form valid?", isValid);
    return isValid;
  };

  // Calculate subtotal, shipping fee, and total
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingFee = 500; // Example shipping fee
  const total = subtotal + shippingFee;

  // Handle form submission
  const handleConfirmOrder = (e) => {
    e.preventDefault();
    console.log("Confirm Order clicked");
    if (!isFormValid()) {
      alert("Please fill out all required fields.");
      return;
    }
    navigate("/confirmation");
    console.log("Navigating to confirmation page");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Shipping Information Form and Order Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
          <form onSubmit={handleConfirmOrder} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number*</label>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address*</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Wilaya*</label>
              <select
                name="wilaya"
                value={formData.wilaya}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Choose wilaya</option>
                {wilayas.map((wilaya) => (
                  <option key={wilaya} value={wilaya}>
                    {wilaya}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Note</label>
              <input
                type="text"
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Delivery hand or yalidin :D"
              />
            </div>

            {/* Confirm Order Button */}
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full mt-6 px-6 py-2 rounded-lg ${
                isFormValid() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
              } text-white`}
            >
              Confirm Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            {cartItems.map((item) => (
              <div key={item.id} className="mb-4">
                <p>
                  {item.name} - {item.price} DZD
                </p>
                <p>Color: {item.color}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p>Subtotal: {cart.reduce((total, item)=> total + item.price * item.quantity, 0)} DZD</p>
             
              <p>Shipping Fee: {shippingFee} DZD</p>
              <p className="font-bold">Total: {cart.reduce((total,item)=> total + item.price * item.quantity, 0)+ {shippingFee}} DZD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;