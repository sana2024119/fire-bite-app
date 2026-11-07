const aboutParagraphs = [
  "Fire Bite is a burger restaurant that serves fresh and delicious burgers for all burger lovers.",
  "Our goal is to provide customers with tasty food, simple online ordering, and a comfortable restaurant experience.",
];

const reasons = [
  "A unique Fire Bite flavor in every burger.",
  "A menu created for every burger lover.",
  "Freshly prepared meals made to order.",
  "A smooth ordering experience from start to finish.",
  "A brand that puts customer satisfaction first.",
];

function About({ restaurantName = "Fire Bite" }) {
  return (
    <div className="about-page">
      <h1>About {restaurantName}</h1>

      {aboutParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <h2>Why Choose {restaurantName}?</h2>

      <ul>
        {reasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
