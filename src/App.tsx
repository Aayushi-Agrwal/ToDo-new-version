import { useState } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    "This is a sample text",
    "How to do work",
    "Why can't I do work",
  ]);

  const mapItem = items.map((item) => {
    return <Item item={item} deleteItem={() => handleDeleteItem(item)} />;
  });

  const handleDeleteItem = (value: string) => {
    setItems((oldValues) => {
      return oldValues.filter((item) => item !== value);
    });
  };

  const handleAddClick = () => {
    if (input === "") {
      console.log("empty");
    } else {
      setInput("");
      const addObjectToArray = (obj: string) => {
        setItems((current) => [...current, obj]);
      };
      return addObjectToArray(input);
    }
  };

  const onChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="background">
        <img src="/background.png" alt="background" />
      </div>
      <div className="body-main">
        <div className="body">
          <h2>TODO</h2>
          <div className="list">
            <div className="input">
              <input
                placeholder="Add your todo here!"
                type="text"
                value={input}
                onChange={onChange}
                onSubmit={handleAddClick}
              />
              <button onClick={handleAddClick}>Add</button>
            </div>
            <div className="items">{mapItem}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
