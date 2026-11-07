// استيراد React لاستخدام خصائص React
import React from "react";

// استيراد ReactDOM لعرض تطبيق React داخل صفحة HTML
import ReactDOM from "react-dom/client";

// استيراد ملف التنسيقات العامة للتطبيق
import "./index.css";

// استيراد المكوّن الرئيسي للتطبيق
import App from "./App";

// الحصول على العنصر الذي يحمل id اسمه root من ملف index.html
const rootElement = document.getElementById("root");

// إنشاء نقطة تشغيل React مرتبطة بعنصر root
const root = ReactDOM.createRoot(rootElement);

// عرض المكوّن الرئيسي App داخل عنصر root
root.render(
  // StrictMode يساعد على اكتشاف المشاكل المحتملة أثناء التطوير
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
