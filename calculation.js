const strictEqual = (valueOne, valueTwo) => {
  return valueOne == valueTwo && typeof valueOne == typeof valueTwo
}

module.exports = strictEqual


