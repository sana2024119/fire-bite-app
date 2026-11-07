import { Link, useLocation } from "react-router-dom";

const orderSteps = [
  {
    id: 1,
    title: "Order Confirmed",
    description: "We received your order successfully.",
    icon: "✓",
  },
  {
    id: 2,
    title: "Preparing Your Food",
    description: "Our chefs are preparing your fresh burgers.",
    icon: "🍔",
  },
  {
    id: 3,
    title: "Out for Delivery",
    description: "Your order is on its way to you.",
    icon: "🚗",
  },
  {
    id: 4,
    title: "Delivered",
    description: "Enjoy your delicious Fire Bite meal!",
    icon: "★",
  },
];

function Orders() {
  const locationState = useLocation();

  const total = Number(locationState.state?.total || 0);

  const orderNumber = locationState.state?.orderNumber || "FB-000000";

  const deliveryLocation =
    locationState.state?.location || "Location not provided";

  const paymentMethod =
    locationState.state?.paymentMethod || "Cash on Delivery";

  const currentStep = 2;

  return (
    <div className="orders-page">
      <div className="order-header">
        <p className="order-label">FIRE BITE ORDER</p>

        <h1>Track Your Order</h1>

        <p className="order-subtitle">
          Follow your order from our kitchen to your door.
        </p>
      </div>

      <div className="order-card">
        <div className="order-card-top">
          <div>
            <p className="small-label">ORDER NUMBER</p>
            <h2>#{orderNumber}</h2>
          </div>

          <span className="order-status">Preparing</span>
        </div>

        <div className="order-summary">
          <div>
            <span>Estimated delivery</span>
            <strong>25–35 minutes</strong>
          </div>

          <div>
            <span>Order total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <div>
            <span>Delivery location</span>
            <strong>{deliveryLocation}</strong>
          </div>

          <div>
            <span>Payment method</span>
            <strong>{paymentMethod}</strong>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="order-steps">
          {orderSteps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <div
                className={`order-step ${
                  isCompleted ? "completed" : ""
                } ${isCurrent ? "current" : ""}`}
                key={step.id}
              >
                <div className="step-icon">{step.icon}</div>

                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {isCompleted && <span className="step-check">✓</span>}
              </div>
            );
          })}
        </div>

        <Link to="/menu" className="order-menu-button">
          Order More Food
        </Link>
      </div>
    </div>
  );
}

export default Orders;
