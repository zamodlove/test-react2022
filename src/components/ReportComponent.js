import { useContext } from "react";
import DataContext from "./data/DataContext";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  return (
    <div>
     <h3>ยอดคงเหลือ (บาท)</h3>
     <h1>{income-expense}</h1>
    </div>  
  );
};

export default ReportComponent;
