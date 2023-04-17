export function sumProductPoints(productsArray) {
  const sum = productsArray.reduce((accumulator, object) => {
    if (object.is_redemption) {
      return accumulator - object.points;
    }
    return accumulator + object.points;
  }, 0);
  return sum;
}
