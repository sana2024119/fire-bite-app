// استيراد useState لتخزين بيانات نموذج التواصل وحالته
import { useState } from "react";

// المكوّن الرئيسي لصفحة Contact
function Contact() {
  // تخزين القيم التي يدخلها المستخدم في نموذج التواصل
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // تخزين رسالة الخطأ عند وجود حقول فارغة
  const [error, setError] = useState("");

  // تحديد ما إذا تم إرسال الرسالة بنجاح
  const [sent, setSent] = useState(false);

  // تحديث بيانات النموذج عند الكتابة داخل أي حقل
  function handleChange(event) {
    // استخراج اسم الحقل والقيمة التي أدخلها المستخدم
    const { name, value } = event.target;

    // تحديث الحقل الذي تغيّرت قيمته مع الحفاظ على باقي الحقول
    setForm({
      ...form,
      [name]: value,
    });

    // إخفاء رسالة الخطأ عند تعديل النموذج
    setError("");

    // إخفاء رسالة النجاح عند تعديل النموذج
    setSent(false);
  }

  // تنفيذ هذه الوظيفة عند إرسال النموذج
  function handleSubmit(event) {
    // منع إعادة تحميل الصفحة بعد إرسال النموذج
    event.preventDefault();

    // التأكد من أن جميع الحقول تحتوي على بيانات
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      // عرض رسالة خطأ للمستخدم
      setError("Please fill in all fields.");

      // التأكد من عدم عرض رسالة النجاح
      setSent(false);

      return;
    }

    // إزالة أي رسالة خطأ سابقة
    setError("");

    // عرض رسالة نجاح الإرسال
    setSent(true);

    // تفريغ الحقول بعد إرسال الرسالة
    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    // الحاوية الرئيسية لصفحة التواصل
    <div className="contact-page">
      {/* عنوان صفحة التواصل */}
      <h1>Contact Fire Bite</h1>

      {/* عرض معلومات التواصل الخاصة بالمطعم */}
      <p>Email: info@firebite.com</p>
      <p>Phone: 70 123 456</p>

      {/* نموذج التواصل */}
      <form onSubmit={handleSubmit}>
        {/* حقل إدخال اسم المستخدم */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />

        {/* حقل إدخال البريد الإلكتروني */}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />

        {/* حقل كتابة الرسالة */}
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
        />

        {/* عرض رسالة الخطأ فقط إذا كانت موجودة */}
        {error && <p className="error-message">{error}</p>}

        {/* زر إرسال الرسالة */}
        <button type="submit">Send Message</button>
      </form>

      {/* عرض رسالة النجاح بعد إرسال النموذج */}
      {sent && <p className="success-message">Message sent successfully!</p>}
    </div>
  );
}

// تصدير المكوّن لاستخدامه في App.js
export default Contact;
