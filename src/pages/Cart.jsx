// استيراد Link للانتقال بين الصفحات، وuseNavigate للانتقال برمجيًا
import { Link, useNavigate } from "react-router-dom";

// استيراد useState لتخزين موقع التوصيل
import { useState } from "react";

// المكوّن الرئيسي لصفحة Cart
function Cart({ cartItems, removeFromCart, clearCart }) {
  // تخزين موقع التوصيل الذي يدخله المستخدم
  const [location, setLocation] = useState("");

  // أداة للانتقال إلى صفحة أخرى من خلال الكود
  const navigate = useNavigate();

  // التحقق إذا كانت السلة فارغة
  const isCartEmpty = cartItems.length === 0;

  // حساب عدد المنتجات الموجودة داخل السلة
  const totalItems = cartItems.length;

  // حساب السعر الإجمالي لكل المنتجات داخل السلة
  const total = cartItems.reduce(
    (sum, burger) => sum + Number(burger.price),
    0,
  );

  // تنفيذ عملية تأكيد الطلب
  const handlePlaceOrder = () => {
    // التأكد من أن المستخدم أدخل موقع التوصيل
    if (!location.trim()) {
      alert("Please enter your delivery location.");
      return;
    }

    // إنشاء رقم طلب مختلف باستخدام الوقت الحالي
    const orderNumber = `FB-${Date.now().toString().slice(-6)}`;

    // الانتقال إلى صفحة Orders وإرسال بيانات الطلب إليها
    navigate("/orders", {
      state: {
        // إرسال السعر الإجمالي
        total,

        // إرسال رقم الطلب
        orderNumber,

        // إرسال موقع التوصيل
        location,

        // تحديد طريقة الدفع
        paymentMethod: "Cash on Delivery",
      },
    });
  };

  return (
    // الحاوية الرئيسية لصفحة السلة
    <div className="cart-page">
      {/* عنوان صفحة السلة */}
      <h1>Your Cart</h1>

      {/* عرض رسالة مختلفة حسب حالة السلة */}
      {isCartEmpty ? (
        // يظهر هذا الجزء عندما تكون السلة فارغة
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>

          {/* رابط للعودة إلى صفحة Menu */}
          <Link to="/menu">Continue Shopping</Link>
        </div>
      ) : (
        // يظهر هذا الجزء عندما تحتوي السلة على منتجات
        <div>
          {/* عرض عدد المنتجات الموجودة في السلة */}
          <p>
            You have {totalItems} item
            {totalItems === 1 ? "" : "s"} in your cart.
          </p>

          {/* عرض كل المنتجات الموجودة داخل السلة */}
          {cartItems.map((burger, index) => (
            // حاوية خاصة بكل منتج
            <div className="cart-item" key={`${burger.id}-${index}`}>
              <div>
                {/* عرض اسم البرغر */}
                <h2>{burger.name}</h2>

                {/* عرض سعر البرغر بعد تنسيقه إلى رقمين عشريين */}
                <p>Price: ${Number(burger.price).toFixed(2)}</p>
              </div>

              {/* زر حذف المنتج من السلة */}
              <button type="button" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          {/* عرض السعر الإجمالي للطلب */}
          <h2>Total: ${total.toFixed(2)}</h2>

          {/* قسم معلومات التوصيل والدفع */}
          <div className="delivery-details">
            {/* عنوان حقل موقع التوصيل */}
            <label htmlFor="location">Delivery Location</label>

            {/* حقل يكتب فيه المستخدم موقع أو عنوان التوصيل */}
            <input
              id="location"
              type="text"
              placeholder="Enter your address or location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />

            {/* عرض طريقة الدفع المتاحة */}
            <p className="payment-method">Payment method: Cash on Delivery</p>
          </div>

          {/* أزرار التحكم بالسلة */}
          <div className="cart-actions">
            {/* زر حذف كل المنتجات من السلة */}
            <button type="button" onClick={clearCart}>
              Clear Cart
            </button>

            {/* زر تأكيد الطلب والانتقال إلى صفحة التتبع */}
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="place-order-link"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// تصدير المكوّن لاستخدامه في App.js
export default Cart;
