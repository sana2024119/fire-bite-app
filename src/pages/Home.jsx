import { Link } from "react-router-dom";

const homeInfo = [
  {
    id: 1,
    title: "Fresh Burgers",
    description: "We prepare our burgers using fresh and tasty ingredients.",
  },
  {
    id: 2,
    title: "Easy Ordering",
    description: "Choose your favorite burger and add it to your cart easily.",
  },
  {
    id: 3,
    title: "Fast Service",
    description: "We prepare your order quickly and carefully.",
  },
];

function Home({ restaurantName = "Fire Bite" }) {
  return (
    <div className="home">
      <h1>Welcome to {restaurantName}</h1>

      <p>Enjoy delicious, fresh, and spicy burgers made especially for you.</p>

      <Link to="/menu">
        <button type="button">Explore Our Menu</button>
      </Link>

      <div className="home-info">
        {homeInfo.map(({ id, title, description }) => (
          <div className="home-info-card" key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
