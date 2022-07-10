function Qty({ qty, decrementcount, incrementcount }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <button onClick={decrementcount}>-</button>
      <div>
        <h4>{qty}</h4>
      </div>
      <button onClick={incrementcount}>+</button>
    </div>
  );
}

export default Qty;
