import Trasection from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useState } from "react";
import DataContext from "./components/data/DataContext";
import ReportComponent from "./components/ReportComponent";


function App() {
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  return (
    <DataContext.Provider value={
      {
        incom :50000,
        expense : -8000
      }
    }>
      <div className="container">
      <h1 className="h-app">แอพบัญชีรายรับ - รายจ่าย</h1>
      <ReportComponent/>
      <FormComponent onAddItem={onAddNewItem} />
      <Trasection items={items} />
    </div>
    </DataContext.Provider>
  );
}

export default App;
