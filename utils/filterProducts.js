export function filterWonProducts(productsArray) {
  const wonProducts = productsArray.filter(
    (object) => object.is_redemption === false
  );

  return wonProducts;
}

export function filterRedeemedProducts(productsArray) {
  const redeemedProducts = productsArray.filter(
    (object) => object.is_redemption === true
  );

  return redeemedProducts;
}
