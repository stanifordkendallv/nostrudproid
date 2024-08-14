function createObject(name, value) {
  return {
    'name': name,
    'value': value
  };
}

const obj = createObject('limit', 10);
console.log(obj);  // Output: { name: 'limit', value: 10 }
