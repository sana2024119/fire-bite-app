// استيراد Link للتنقل بين الصفحات
// واستيراد useLocation للحصول على بيانات الطلب
import { Link, useLocation } from "react-router-dom";

// مصفوفة تحتوي على مراحل الطلب
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

// المكوّن الرئيسي لصفحة تتبّع الطلب
function Orders() {
  // الحصول على بيانات الطلب التي أرسلتها صفحة Cart
  const locationState = useLocation();

  // الحصول على السعر الإجمالي وتحويله إلى رقم
  // إذا لم يوجد السعر، تكون القيمة 0
  const total = Number(locationState.state?.total || 0);

  // الحصول على رقم الطلب
  // إذا لم يوجد رقم، يتم استعمال رقم افتراضي
  const orderNumber = locationState.state?.orderNumber || "FB-000000";

  // الحصول على موقع التوصيل
  // إذا لم يوجد موقع، تظهر رسالة افتراضية
  const deliveryLocation =
    locationState.state?.location || "Location not provided";

  // الحصول على طريقة الدفع
  // القيمة الافتراضية هي الدفع عند الاستلام
  const paymentMethod =
    locationState.state?.paymentMethod || "Cash on Delivery";

  // تحديد رقم المرحلة الحالية من الطلب
  // الرقم 2 يعني أن الطلب قيد التحضير
  const currentStep = 2;

  return (
    // الحاوية الرئيسية لصفحة Orders
    <div className="orders-page">
      {/* القسم العلوي من الصفحة */}
      <div className="order-header">
        {/* اسم المطعم ونوع الصفحة */}
        <p className="order-label">FIRE BITE ORDER</p>

        {/* عنوان صفحة التتبع */}
        <h1>Track Your Order</h1>

        {/* وصف مختصر للصفحة */}
        <p className="order-subtitle">
          Follow your order from our kitchen to your door.
        </p>
      </div>

      {/* البطاقة التي تحتوي على تفاصيل الطلب */}
      <div className="order-card">
        {/* الجزء العلوي من بطاقة الطلب */}
        <div className="order-card-top">
          <div>
            {/* عنوان رقم الطلب */}
            <p className="small-label">ORDER NUMBER</p>

            {/* عرض رقم الطلب */}
            <h2>#{orderNumber}</h2>
          </div>

          {/* عرض حالة الطلب الحالية */}
          <span className="order-status">Preparing</span>
        </div>

        {/* ملخص معلومات الطلب */}
        <div className="order-summary">
          {/* عرض وقت التوصيل المتوقع */}
          <div>
            <span>Estimated delivery</span>
            <strong>25–35 minutes</strong>
          </div>

          {/* عرض السعر الإجمالي */}
          <div>
            <span>Order total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          {/* عرض موقع التوصيل */}
          <div>
            <span>Delivery location</span>
            <strong>{deliveryLocation}</strong>
          </div>

          {/* عرض طريقة الدفع */}
          <div>
            <span>Payment method</span>
            <strong>{paymentMethod}</strong>
          </div>
        </div>

        {/* شريط يوضح تقدم الطلب */}
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        {/* قسم مراحل الطلب */}
        <div className="order-steps">
          {/* تكرار مراحل الطلب وعرضها على الصفحة */}
          {orderSteps.map((step) => {
            // التحقق إذا كانت المرحلة قد اكتملت
            const isCompleted = step.id < currentStep;

            // التحقق إذا كانت المرحلة الحالية
            const isCurrent = step.id === currentStep;

            return (
              // عرض مرحلة واحدة من مراحل الطلب
              <div
                className={`order-step ${
                  // إضافة class completed إذا كانت المرحلة مكتملة
                  isCompleted ? "completed" : ""
                } ${
                  // إضافة class current إذا كانت المرحلة الحالية
                  isCurrent ? "current" : ""
                }`}
                // استخدام رقم المرحلة كمعرّف فريد
                key={step.id}
              >
                {/* عرض أيقونة مرحلة الطلب */}
                <div className="step-icon">{step.icon}</div>

                {/* عرض عنوان ووصف المرحلة */}
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {/* عرض علامة صح إذا كانت المرحلة مكتملة */}
                {isCompleted && <span className="step-check">✓</span>}
              </div>
            );
          })}
        </div>

        {/* رابط للعودة إلى صفحة Menu وطلب المزيد من الطعام */}
        <Link to="/menu" className="order-menu-button">
          Order More Food
        </Link>
      </div>
    </div>
  );
}

// تصدير مكوّن Orders لاستخدامه داخل App.js
export default Orders;
