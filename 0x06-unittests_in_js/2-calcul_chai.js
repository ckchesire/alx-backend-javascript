function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
        return roundedA + roundedB;
    case 'SUBTRACT':
        return roundedA - roundedB;
    case 'DIVIDE':
        return roundedA / roundedB;
    default:
        throw new Error('Invalid operation type');
    }
}

module.exports = calculateNumber;
