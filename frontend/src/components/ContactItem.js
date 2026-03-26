import { useState } from "react";
import axios from "axios";
import EditModal from "./EditModal";

function ContactItem({ contact, fetchContacts }) {
  const [show, setShow] = useState(false);
  const API = "http://localhost:5000/api/contacts";

  const deleteContact = async () => {
    await axios.delete(`${API}/${contact._id}`);
    fetchContacts();
  };

  return (
    <>
      <div className="contact">
        <div>
          <strong>{contact.name}</strong>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>

        <div>
          <button onClick={() => setShow(true)}>✏️</button>
          <button onClick={deleteContact}>❌</button>
        </div>
      </div>

      {show && (
        <EditModal
          contact={contact}
          setShow={setShow}
          fetchContacts={fetchContacts}
        />
      )}
    </>
  );
}

export default ContactItem;