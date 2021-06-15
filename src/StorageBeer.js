function StorageBeer({ beer }) {
  // Calculating how many times (amount) a box is shown
  const totalItems = beer.amount;

  const items = new Array(totalItems).fill(null);

  let percentageColor;

  // Using if sentence to improve readability
  if (beer.amount > 5) {
    percentageColor = "#63c8ba";
  } else if (beer.amount > 3) {
    percentageColor = "#ffc85b";
  } else {
    percentageColor = "#fa5534";
  }


  return (
    <div className="storage-beer">
      <h3>{beer.name}</h3>
      <div className="amounts">
        {items.map((_, id) => (
          <div className="amountbox" key={id} style={{ backgroundColor: percentageColor }}></div>
        ))}
      </div>
    </div>
  );
}

export default StorageBeer;
