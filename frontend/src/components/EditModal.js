import { useState } from "react";
import axios from "axios";

function EditModal({ contact, setShow, fetchContacts }) {
  const [form, setForm] = useState(contact);
  const API = "http://localhost:5000/api/contacts";

  const update = async () => {
    await axios.put(`${API}/${contact._id}`, form);
    fetchContacts();
    setShow(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Contact</h3>

        <input value={form.name}
          onChange={e => setForm({...form, name:e.target.value})} />

        <input value={form.email}
          onChange={e => setForm({...form, email:e.target.value})} />

        <input value={form.phone}
          onChange={e => setForm({...form, phone:e.target.value})} />

        <button onClick={update}>Save</button>
        <button onClick={() => setShow(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default EditModal;