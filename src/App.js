import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

import "./App.css";

const burgers = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, and cheese",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Spicy Fire Burger",
    description: "Spicy beef patty, jalapeños, and hot sauce",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Cheese Burger",
    description: "Beef patty with extra melted cheese",
    price: 9,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
  },
];

const navLinks = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/about",
    label: "About",
  },

  {
    id: 3,
    path: "/menu",
    label: "Menu",
  },
  {
    id: 4,
    path: "/contact",
    label: "Contact",
  },
  {
    id: 5,
    path: "/orders",
    label: "Track Order",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(burger) {
    setCartItems((currentItems) => [...currentItems, burger]);
  }

  function removeFromCart(indexToRemove) {
    setCartItems((currentItems) =>
      currentItems.filter((_, index) => index !== indexToRemove),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = cartItems.length;

  return (
    <BrowserRouter>
      <nav>
        {navLinks.map(({ id, path, label }) => (
          <Link to={path} key={id}>
            {label}
          </Link>
        ))}

        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home restaurantName="Fire Bite" />} />

        <Route path="/about" element={<About restaurantName="Fire Bite" />} />

        <Route
          path="/menu"
          element={<Menu burgers={burgers} addToCart={addToCart} />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />

        <Route path="/orders" element={<Orders />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
