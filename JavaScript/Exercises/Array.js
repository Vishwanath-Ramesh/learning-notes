function array() {
  let arr = Object.create(array.prototype);

  // ? We have created 'length' property this way so that this property will not considered when iterating over the elements
  Object.defineProperty(arr, "length", {
    enumerable: false,
    writable: true,
    value: 0,
  });

  for (let key in arguments) {
    arr[key] = arguments[key];
    arr.length++;
  }

  return arr;
}

array.prototype.push = function (value) {
  this[this.length] = value;
  this.length++;

  return this.length;
};

array.prototype.pop = function () {
  this.length--;
  const elementToRemove = this[this.length];
  delete this[this.length];

  return elementToRemove;
};

array.prototype.filter = function (cb) {
  const result = new array();

  for (let index in this) {
    const element = this[index];

    if (cb(element, index)) {
      result.push(element);
    }
  }

  return result;
};

const arr = new array("John", "Doe");
console.log(arr.filter((item) => item === "Doe"));
