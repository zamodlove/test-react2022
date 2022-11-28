import { useState } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {

console.log("Render FormComponent");

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount)
    };


    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
  };





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
          <label>จำนวน</label>
          <input
            type="text"
            placeholder="(+ รายรับ ,- รายจ่าย)"
            onChange={inputAmount}
            value={amount}
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
