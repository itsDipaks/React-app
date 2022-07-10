import { useState } from "react";
import Cartitem from "./cartitems";
import Total from "./total";
const initialdata=[
    {
        id : 1,
        name_product:"noodels",
        price:"30",
        qty:1
    },
    {
        id : 2,
        name_product:"biryani",
        price:"200",
        qty:2
    },
    {
        id : 1,
        name_product:"poha",
        price:"20",
        qty:5
    }
]
function Cartcontainer() {
   const [data,setdata]=useState(initialdata)
   
   function calculatetotal(products){
    return products.reduce((acc,c)=>acc+(c.qty*c.price),0)
   }
    return ( 
        <div>
            {

            }
            {

                data.map(item=>
                    <Cartitem 
                    key={item.id}
                    lable={item.name_product}
                    price={item.price}
                    qty={item.qty}
                    />
                    )

            }
          
            {

            }
            <Total total={calculatetotal(data)}/>
        </div>
     );
}

export default Cartcontainer;