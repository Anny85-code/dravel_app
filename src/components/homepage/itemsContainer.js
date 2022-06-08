function ItemsConainer() {
  return (
    <>
      <div className="items-container">
        <div className="item-heading">
          <h1>LATEST DISCOVERIES</h1>
          <p>Please select a discovery</p>
        </div>
        <div className="items">
          <div className="images">
            <img
              src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2432&q=80"
              alt=""
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsConainer;
