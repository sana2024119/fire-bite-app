// استيراد Link للانتقال إلى صفحات أخرى بدون إعادة تحميل الموقع
import { Link } from "react-router-dom";

// معلومات البطاقات التي تظهر في الصفحة الرئيسية
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

// المكوّن الرئيسي للصفحة الرئيسية
// restaurantName يتم تمريره من App.js
// والقيمة الافتراضية هي Fire Bite
function Home({ restaurantName = "Fire Bite" }) {
  return (
    // الحاوية الرئيسية للصفحة الرئيسية
    <div className="home">
      {/* عرض رسالة ترحيبية مع اسم المطعم */}
      <h1>Welcome to {restaurantName}</h1>

      {/* وصف مختصر للمطعم */}
      <p>Enjoy delicious, fresh, and spicy burgers made especially for you.</p>

      {/* رابط ينقل المستخدم إلى صفحة Menu */}
      <Link to="/menu">
        {/* زر لفتح قائمة الطعام */}
        <button type="button">Explore Our Menu</button>
      </Link>

      {/* قسم البطاقات التعريفية الموجودة في الصفحة الرئيسية */}
      <div className="home-info">
        {/* تكرار معلومات البطاقات باستخدام map */}
        {homeInfo.map(({ id, title, description }) => (
          // بطاقة واحدة لكل ميزة
          <div className="home-info-card" key={id}>
            {/* عنوان البطاقة */}
            <h2>{title}</h2>

            {/* وصف البطاقة */}
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// تصدير المكوّن لاستخدامه في App.js
export default Home;
