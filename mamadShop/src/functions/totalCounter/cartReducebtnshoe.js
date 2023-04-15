export const cartReducebtnshoe = (item, id) => {
  console.log(item);
  const cartcounterShoe = document.getElementById(`cartcounterShoe${id}`);
  let counterShoe = +cartcounterShoe.innerText;
  const newcounterShoe = counterShoe - 1;
  if (newcounterShoe > 0) {
    cartcounterShoe.innerText = newcounterShoe;
  }
};
