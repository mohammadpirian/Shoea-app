export const reducebtnshoe = (data) => {
  const counterShoe = Number(
    document.getElementById("counterShoe").firstChild.data
  );
  const totalPriceShoe = Number(
    document.getElementById("totalPriceShoe").firstChild.data.substr(2)
  );
  //   console.log(totalPriceShoe);
  if (counterShoe > 1) {
    const newcounterShoe = counterShoe - 1;
    const newtotalPriceShoe = newcounterShoe * data.price;
    document.getElementById("counterShoe").innerText = newcounterShoe;
    document.getElementById("totalPriceShoe").innerText =
      "$ " + newtotalPriceShoe;
  }

  //   console.log(newcounterShoe);
};
