function sum(x, y) {
  let result;
  if ((typeof x && typeof y) !== "number") {
    throw new Error("Params must be a number");
  }
  result = x + y;
  if (parseInt(result) !== result) {
    result = parseFloat(result.toPrecision(12));
  }
  console.log(`${x} plus ${y} equals: `, result);
  return result;
}

module.exports = sum;
