function formatProperty(property) {
  switch (property.type) {
    case 'string': 
      return property.value;
    case 'number':
      return property.value + ' см';
    case 'range': {
      const { from, to } = property.value;
      return `от ${from} см до ${to} см`;
    }
    case '2dimensions':
    case '3dimensions': {
      const { a, b, c } = property.value;
      return [a, b, c].filter(Boolean).join('x') + ' см';
    }
    default:
      return JSON.stringify(property.value);
  }
}
export default formatProperty
