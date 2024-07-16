import { useState } from "react";

import Chat from "./Components/Chat.jsx";
import ContactList from "./Components/ContactList.jsx";
import contacts from "./Data/data.js";

export default function App() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
