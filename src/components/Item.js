const Item = () => {
  const name = "ซื้อของที่ห้าง";
  const amount = 7000;

  return (
    <li>
      {name} <span> -{amount}</span>
    </li>
  );
};

export default Item;
