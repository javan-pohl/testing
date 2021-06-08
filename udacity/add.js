function sum(x, y) {
  let result;
  if ((typeof x && typeof y) !== "number") {
    throw new Error("Params must be a number");
  }
  result = x + y;
  // console.log('result.toFixed: ', result.toFixed())
  // console.log('result.toFixed: ', result.toFixed(1))
  console.log(x, y);
  console.log("result: ", result);
  if (parseInt(result) !== result) {
    result = parseFloat(result.toPrecision(12));
  }
  console.log(`${x} plus ${y} equals: `, result);
  return result;
}

// add(5,6)
// add('five', 'six')
// add(0.1, 0.2);
// add(0.9, 0.9);
// add(0.234, 0.167);
module.exports = sum;
