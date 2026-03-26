import { useState } from "react";
import axios from "axios";

function ContactForm({ fetchContacts }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const API = "https://contact-management-app-gls7.onrender.com/api/contacts";

  const handleSubmit = async () => {
    try {
      // Validation
      if (!form.name || !form.phone) {
        alert("Name and Phone are required!");
        return;
      }

      console.log("Sending data:", form); // Debug

      // API call
      const res = await axios.post(API, form);
      console.log("Response:", res.data); // Debug

      // Clear form
      setForm({ name: "", email: "", phone: "" });

      // Refresh list
      fetchContacts();

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add contact");
    }
  };

  return (
    <div className="form">
      <input
        value={form.name}
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        value={form.email}
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        value={form.phone}
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button onClick={handleSubmit}>Add Contact</button>
    </div>
  );
}

export default ContactForm;