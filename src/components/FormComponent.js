import { useState } from "react";
import "./FormComponent.css";






const FormComponent = () => {

    const [title,setTitle]= useState('')
    const [amount,setAmount]= useState(0)

 
  const inputTitle = (event) => {
    setTitle(event.target.value)
  };
  const inputAmount = (event) => {
    setAmount(event.target.value)
  };
const saveItem=(event)=>{
    event.preventDefault()
   const itemdata={
    title:title,
    amount:Number(amount)
   }
   console.log(itemdata)
   setTitle('')
   setAmount(0)
}
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบบชื่อรายการของคุณ"
            onChange={inputTitle}
            value={title}
          ></input>
        </div>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="(+ รายรับ ,- รายจ่าย)"
            onChange={inputAmount} value={amount}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
