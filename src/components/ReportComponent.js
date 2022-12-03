import { useContext } from "react";
import DataContext from "./data/DataContext";
import './ReportComponent.css'

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  return (
    <div>
     <h3>ยอดคงเหลือ (บาท)</h3>
     <h1>{income-expense}</h1>
      <div className="report-container">
        <div>
          <h4>ยอดรายรับ</h4>
          <p className="report-income">{income}</p>
        </div>
        <div>
        <h4>ยอดรายจ่าย</h4>
        <p className="report-expense">{expense}</p>
        </div>


      </div>
   
    </div>  
  );
};

export default ReportComponent;
