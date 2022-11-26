import Trasection from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useState } from "react";


function App() {
  const initdata = [
    { id:1, title: "ค่าเดินทาง", amount: 1000 },
    { id:2, title: "ค่าอาหาร", amount: 2000 },
    { id:3, title: "ค่าซ่อมนาฬิกา", amount: 5000 },
    { id:4, title: "เงินเดือน", amount: 200000 },
    { id:5, title: "ค่าเติมเกม", amount: 6000 },
  ];

  const [items,setItems] = useState(initdata)
const onAddNewItem =(newItem) => {
  setItems((prevItem)=>{
    return [newItem,...prevItem]
  })
}




  return (
    <div className="container">
      <h1 className="h-app">แอพบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent onAddItem= {onAddNewItem}/>
      <Trasection items={items} />
    </div>
  );
}

export default App;
