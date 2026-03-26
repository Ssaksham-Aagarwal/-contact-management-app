import ContactItem from "./ContactItem";

function ContactList({ contacts, fetchContacts }) {
  return (
    <div className="list">
      {contacts.map(c => (
        <ContactItem key={c._id} contact={c} fetchContacts={fetchContacts} />
      ))}
    </div>
  );
}

export default ContactList;