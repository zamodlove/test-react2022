import Item from "./Item";
import "./Transaction.css";

import { v4 as uuidv4 } from "uuid";

const Trasection = () => {
  const data = [
    { title: "ค่าเดินทาง" , amount: 1000 },
    { title: "5555", amount: 2000 },
    { title: "ค่าซ่อมนาฬิกา", amount: 5000 },
    { title: "เงินเดือน", amount: 200000 },
    { title: "ค่าเติมเกม", amount: 6000 },
  ]

  return (
    <ul className="item-list">
      {data.map((element) => {
        return <Item {...element} key={uuidv4()} />;
      })}
    </ul>
  );
};

export default Trasection;
