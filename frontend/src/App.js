import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  const API = "http://localhost:5000/api/contacts";

  const fetchContacts = async () => {
    const res = await axios.get(API);
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={dark ? "container dark" : "container"}>
      <div className="card">
        <Navbar dark={dark} setDark={setDark} />

        <input
          className="search"
          placeholder="🔍 Search contact..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <ContactForm fetchContacts={fetchContacts} />
        <ContactList contacts={filtered} fetchContacts={fetchContacts} />
      </div>
    </div>
  );
}

export default App;