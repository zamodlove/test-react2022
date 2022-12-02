import Trasection from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useEffect, useState } from "react";
import DataContext from "./components/data/DataContext";
import ReportComponent from "./components/ReportComponent";
   
function App() {

const initState = [
{id:1,title:"ค่าเช่าบ้าน",amount:-2000},
{id:2,title:"เงินเดือน",amount:12000},
{id:3,title:"ค่าเดินทาง",amount:-500},
{id:4,title:"ขายของ",amount:2000}
]
  const [items, setItems] = useState(initState);
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
 
    setItems((prevItem) => {
      return [newItem, ...prevItem];         
    });
  };  
  useEffect(() => {
   const amounts = items.map(items=>items.amount)
  const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element, 0)
  const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element, 0))*-1
   

    setReportIncome(income)
    setReportExpense(expense)
  }, [items,reportIncome,reportExpense])


  return (
    <DataContext.Provider value={
      {
        income :reportIncome,
        expense : reportExpense
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
