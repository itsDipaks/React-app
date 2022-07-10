import Lableprice from "./labelsprice";
import Qty from "./quantity";

function Cartitem({
    lable,
    price,
    qty
}) {
    return ( 
        <div style={{
            display:"flex",
            padding:"2rem",
            justifyContent:"center"
            ,alignItems:"center"
        }}>
            <Lableprice lable={lable} price={price} qty={qty}/>
            <Qty qty={qty}/>
        </div>
     );
}

export default Cartitem;