function add(x, y) {
  let result;
  if ((typeof x && typeof y) !== 'number') {
    throw new Error ('Params must be a number')
  }
  result = x + y;
  console.log(`${x} plus ${y} equals: `, result)
  return result
}

add(5,6)
add('five', 'six')
add(.1, .2)