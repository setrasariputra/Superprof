import React from "react";
import Card from "./components/Card";
import emojipedia from "./emojipedia";

const cards = emojipedia.map((card) => (
  <Card
    emoji={card.emoji}
    name={card.name}
    meaning={card.meaning}
  />
));

function App() {
  return (
    <div>
      <h1 className="title">emojipedia</h1>
      <br />
      <div className="flex-content">
        {cards}
      </div>
    </div>
  );
}

export default App;