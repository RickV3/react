import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Paris", "Berlin", "London"];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectItem = (item: string) => {
    console.log(item);
    setSelectedItem(item); // Set the selected city
  };

  return (
    <div>
    
      <title>React App</title>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      
      {selectedItem === "New York" && <h1 className="text-center fs-1 text-primary mt-5">New York</h1>}
      {selectedItem === "San Francisco" && <h1 className="text-center fs-1 text-success mt-5">San Francisco</h1>}
      {selectedItem === "Paris" && <h1 className="text-center fs-1 text-danger mt-5">Paris</h1>}
      {selectedItem === "Berlin" && <h1 className="text-center fs-1 text-info mt-5">Berlin</h1>}
      {selectedItem === "London" && <h1 className="text-center fs-1 text-warning mt-5">London</h1>}
    </div>
  );
}

export default App;
