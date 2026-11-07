import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setError("");
    setSent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      setSent(false);
      return;
    }

    setError("");
    setSent(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="contact-page">
      <h1>Contact Fire Bite</h1>

      <p>Email: info@firebite.com</p>
      <p>Phone: 70 123 456</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Send Message</button>
      </form>

      {sent && <p className="success-message">Message sent successfully!</p>}
    </div>
  );
}

export default Contact;
