// Import React state management
import { useState } from "react";

// Import routing components from React Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import all website pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

// Import the main application styles
import "./App.css";

// Burger data used in the Menu page
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

// Navigation links displayed in the navbar
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

// Main application component
function App() {
  // Store the burgers added by the user
  const [cartItems, setCartItems] = useState([]);

  // Add a selected burger to the cart
  function addToCart(burger) {
    setCartItems((currentItems) => [...currentItems, burger]);
  }

  // Remove a burger from the cart using its index
  function removeFromCart(indexToRemove) {
    setCartItems((currentItems) =>
      currentItems.filter((_, index) => index !== indexToRemove),
    );
  }

  // Remove all items from the cart
  function clearCart() {
    setCartItems([]);
  }

  // Calculate the number of items in the cart
  const cartCount = cartItems.length;

  return (
    // basename allows the app to work correctly on GitHub Pages
    <BrowserRouter basename="/fire-bite-app">
      {/* Website navigation bar */}
      <nav>
        {/* Create a link for every navigation item */}
        {navLinks.map(({ id, path, label }) => (
          <Link to={path} key={id}>
            {label}
          </Link>
        ))}

        {/* Cart link with the current number of items */}
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      {/* Define all application routes */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home restaurantName="Fire Bite" />} />

        {/* About page route */}
        <Route path="/about" element={<About restaurantName="Fire Bite" />} />

        {/* Menu page route with burger data and cart function */}
        <Route
          path="/menu"
          element={<Menu burgers={burgers} addToCart={addToCart} />}
        />

        {/* Contact page route */}
        <Route path="/contact" element={<Contact />} />

        {/* Cart page route with cart functions */}
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

        {/* Order tracking page route */}
        <Route path="/orders" element={<Orders />} />

        {/* Page displayed when the route does not exist */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Export App so it can be used in index.js
export default App;
