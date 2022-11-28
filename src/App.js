import Trasection from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  return (
    <div className="container">
      <h1 className="h-app">แอพบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent onAddItem={onAddNewItem} />
      <Trasection items={items} />
    </div>
  );
}

export default App;
