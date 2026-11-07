// مصفوفة تحتوي على الفقرات التعريفية بالمطعم
const aboutParagraphs = [
  "Fire Bite is a burger restaurant that serves fresh and delicious burgers for all burger lovers.",
  "Our goal is to provide customers with tasty food, simple online ordering, and a comfortable restaurant experience.",
];

// مصفوفة تحتوي على الأسباب التي تميز مطعم Fire Bite
const reasons = [
  "A unique Fire Bite flavor in every burger.",
  "A menu created for every burger lover.",
  "Freshly prepared meals made to order.",
  "A smooth ordering experience from start to finish.",
  "A brand that puts customer satisfaction first.",
];

// المكوّن الرئيسي لصفحة About
// restaurantName يتم استقباله من App.js، والقيمة الافتراضية هي Fire Bite
function About({ restaurantName = "Fire Bite" }) {
  return (
    // الحاوية الرئيسية لصفحة About
    <div className="about-page">
      {/* عرض عنوان الصفحة مع اسم المطعم */}
      <h1>About {restaurantName}</h1>

      {/* عرض الفقرات التعريفية باستخدام map */}
      {aboutParagraphs.map((paragraph, index) => (
        // عرض كل فقرة داخل عنصر p
        // استخدام index كـ key لتمييز كل عنصر
        <p key={index}>{paragraph}</p>
      ))}

      {/* عنوان قسم أسباب اختيار المطعم */}
      <h2>Why Choose {restaurantName}?</h2>

      {/* قائمة الأسباب */}
      <ul>
        {/* تحويل كل سبب إلى عنصر داخل القائمة */}
        {reasons.map((reason, index) => (
          // عرض السبب داخل عنصر li
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </div>
  );
}

// تصدير المكوّن لاستخدامه في App.js
export default About;
