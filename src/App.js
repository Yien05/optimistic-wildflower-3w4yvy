import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const handleMultipleAdd = () => {
    // Adding 5 items, but calling setItems each time
    setItems((oldItems) => {
      const newItems = [];

      for (let i = 0; i < 5; i++) {
        newItems.push(oldItems.length + i + 1);
      }
      return [...oldItems, ...newItems];
    });
  };

  return (
    <div>
      <h1>Avoid Excessive State Updates</h1>
      <button onClick={handleMultipleAdd}>Add 5 Items</button>
      {items.map((item) => (
        <p>Item {item} </p>
      ))}
    </div>
  );
};

export default App;
