function Lableprice({ lable, price }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <div>{lable}</div>
      <div> $ {price}</div>
    </div>
  );
}

export default Lableprice;
