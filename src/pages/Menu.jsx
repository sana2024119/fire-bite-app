// المكوّن الرئيسي لصفحة قائمة الطعام
// burgers هي قائمة البرغر القادمة من App.js
// addToCart هي وظيفة إضافة البرغر إلى السلة
function Menu({ burgers = [], addToCart }) {
  // التحقق مما إذا كانت قائمة البرغر فارغة
  const isMenuEmpty = burgers.length === 0;

  return (
    // الحاوية الرئيسية لصفحة Menu
    <div className="menu-page">
      {/* عنوان صفحة قائمة الطعام */}
      <h1>Our Menu</h1>

      {/* عرض رسالة إذا لم تتوفر أي برغر */}
      {isMenuEmpty ? (
        <p>No burgers are available at the moment.</p>
      ) : (
        // عرض قائمة البرغر إذا كانت متوفرة
        <div className="burger-list">
          {/* تكرار عناصر البرغر باستخدام map */}
          {burgers.map(({ id, image, name, description, price }) => (
            // بطاقة خاصة بكل برغر
            <div className="burger-card" key={id}>
              {/* عرض صورة البرغر */}
              <img src={image} alt={name} />

              {/* عرض اسم البرغر */}
              <h2>{name}</h2>

              {/* عرض وصف البرغر */}
              <p>{description}</p>

              {/* عرض سعر البرغر */}
              <p>Price: ${price}</p>

              {/* زر إضافة البرغر إلى السلة */}
              <button
                type="button"
                onClick={() =>
                  // إرسال بيانات البرغر إلى وظيفة addToCart
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

// تصدير المكوّن لاستخدامه في App.js
export default Menu;
