// استيراد Link للانتقال إلى صفحة Home بدون إعادة تحميل الموقع
import { Link } from "react-router-dom";

// المكوّن الذي يظهر عندما يدخل المستخدم إلى رابط غير موجود
function NotFound() {
  return (
    // الحاوية الرئيسية لصفحة الخطأ
    <div className="not-found">
      {/* عرض عنوان الخطأ */}
      <h1>404 - Page Not Found</h1>

      {/* توضيح أن الصفحة المطلوبة غير موجودة */}
      <p>The page you are looking for does not exist.</p>

      {/* رابط يعيد المستخدم إلى الصفحة الرئيسية */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

// تصدير المكوّن لاستخدامه داخل App.js
export default NotFound;
