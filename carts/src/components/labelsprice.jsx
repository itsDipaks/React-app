function Lableprice({ lable, price }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent:"space-between",
       
        width:"50%"
        ,height:"50px",
        alignItems:"center"
      }}
    >
      <div>{lable}</div>
      <div> ₹{price}</div>
    </div>
  );
}

export default Lableprice;
