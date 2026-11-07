function Menu({ burgers = [], addToCart }) {
  const isMenuEmpty = burgers.length === 0;

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      {isMenuEmpty ? (
        <p>No burgers are available at the moment.</p>
      ) : (
        <div className="burger-list">
          {burgers.map(({ id, image, name, description, price }) => (
            <div className="burger-card" key={id}>
              <img src={image} alt={name} />

              <h2>{name}</h2>
              <p>{description}</p>
              <p>Price: ${price}</p>

              <button
                type="button"
                onClick={() =>
                  addToCart({
                    id,
                    name,
                    description,
                    price,
                    image,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
