import Trasection from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useEffect, useState } from "react";
import DataContext from "./components/data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { element } from "prop-types";


function App() {
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
   const amounts = items.map(items=>items.amount)
  const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element, 0)
    

  console.log("ยอดรายได้ =",income)
  }, [items])
  console.log(items)

  return (
    <DataContext.Provider value={
      {
        income :50000,
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
