import { Children } from "react";

function Button({
    onClick,
    Children,
    disabled
}) {
    return ( 
        <button onClick={onClick}
        style={{
            padding:"1rem",
            border:0,
            fontFamily:"bold",
            backgroundColor:"tomato"
            ,color:"white"
        }} disabled={disabled}>

            {Children}
        </button>
     );
}

export default Button;