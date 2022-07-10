import Lableprice from "./labelsprice";
import Qty from "./quantity";

function Cartitem({
    lable,
    price,
    qty,
    id,
    handlechange
}) {
    return ( 
        <div style={{
            display:"flex",
            padding:"2rem",
            justifyContent:"space-between",
            alignItems:"center",
            height:"0px",
            width:"70%",
            margin:"auto",
            marginTop:"10px",
            color:"white",
            backgroundColor:"black",
            borderRadius:"30px",
            fontSize:"14px"
        }}>
            <Lableprice lable={lable} price={price} qty={qty}/>
            <Qty qty={qty}
            incrementcount={()=>handlechange(id,1)}
            decrementcount={()=>handlechange(id,-1)}/>
        </div>
     );
}

export default Cartitem;