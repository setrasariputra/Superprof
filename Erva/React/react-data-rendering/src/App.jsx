import React from "react";
import Card from "./components/Card";
import contacts from "./contacts";

function App() {
    const cards = contacts.map(contact => (
        <Card
            name={contact.name}
            email={contact.email}
            tel={contact.tel}
        />
    ));
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <div class="flex-content">
                {cards}
            </div>
        </div>
    )
}

export default App;