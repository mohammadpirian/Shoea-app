export const cartIncreasebtnshoe = (item, id) => {
  console.log(item);
  const cartcounterShoe = document.getElementById(`cartcounterShoe${id}`);
  let counterShoe = +cartcounterShoe.innerText;
  const newcounterShoe = counterShoe + 1;

  cartcounterShoe.innerText = newcounterShoe;
};
