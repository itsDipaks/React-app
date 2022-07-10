import { useState } from "react";
import Cartitem from "./cartitems";
import Total from "./total";
const initialdata = [
  {
    id: 1,
    name_product: "Noodels",
    price: "50",
    qty: 1,
  },
  {
    id: 2,
    name_product: "Biryani",
    price: "200",
    qty: 2,
  },
  {
    id: 3,
    name_product: "Poha",
    price: "20",
    qty: 5,
  },
  {
    id: 4,
    name_product: "Maggi",
    price: "25",
    qty: 5,
  },
];
function calculatetotal(products) {
  return products.reduce((acc, c) => acc + c.qty * c.price, 0);
}
function Cartcontainer() {
  const [data, setdata] = useState(initialdata);

  const handlechange = (id, amount) => {
    let updateddata = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + amount,
        };
      } else {
        return item;
      }
    });
    setdata(updateddata);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "40%",
        height: "450px",
        marginTop: "50px",
        backgroundColor: "tomato",
        color: "white",
        borderRadius: "10px",
      }}
    >
      {
        <h1
          style={{
            fontFamily: "sans-serif",
            color: "black",
            paddingTop: "20px",
            textDecoration: "underline",
          }}
        >
          Food App
        </h1>
      }
      {data.map((item) => (
        <Cartitem
          key={item.id}
          id={item.id}
          lable={item.name_product}
          price={item.price}
          qty={item.qty}
          handlechange={handlechange}
        />
      ))}
      {<Total total={calculatetotal(data)} />}
    </div>
  );
}

export default Cartcontainer;
