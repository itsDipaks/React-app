function Qty({ qty, decrementcount, incrementcount }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        height:"30px",
        alignItems:"center",
        justifyContent:"space-between",
        width:"30%"
      }}
    >
      <button className="d" style={{
        height:"100%",
        width:"30%",
        
      }} disabled={qty===0}  onClick={decrementcount}>-</button>
      <div>
        <h4>{qty}</h4>
      </div>
      <button className="d" style={{
        height:"100%",
        width:"30%"
      }} onClick={incrementcount}>+</button>
    </div>
  );
}

export default Qty;
