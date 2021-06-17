function addition(a,b) {

  let result = 0;

  if (!a && !b) {
    throw Error("Error at least one number is required");
  }

  if (!a && b) {
    result = b + 2;
  }

  if (a && !b) {
    result = a + 2;
  }

  if (b && a) {
    result = a + b;
  }

  return result;
}

module.exports = addition;


