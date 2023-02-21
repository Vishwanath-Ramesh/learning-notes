// Lazy execution function
function lazyRepeater(count) {
  return function allTheAs() {
    return "".padStart(count, "A");
  };
}

const A = lazyRepeater(10);
A(); // AAAAAAAAAA
A(); // AAAAAAAAAA

// Eager execution function
function eagerRepeater(count) {
  const str = "".padStart(count, "A");

  return function allTheAs() {
    return str;
  };
}

const A = eagerRepeater(10);
A(); // AAAAAAAAAA
A(); // AAAAAAAAAA

// Memoization
function memoizedRepeater(count) {
  let str;

  return function allTheAs() {
    if (str == undefined) str = "".padStart(count, "A");

    return str;
  };
}

const A = memoizedRepeater(10);
A(); // AAAAAAAAAA
A(); // AAAAAAAAAA

// Memoization from custom FP library
function utilityMemoizedRepeater(count) {
  // This 'memoize' manages/maintains the internal cache, so when the same input is passed, this functions returns the cached result instead of executing once again.
  return memoize(function allTheAs() {
    return "".padStart(count, "A");
  });
}

const A = utilityMemoizedRepeater(10);
A(); // AAAAAAAAAA
A(); // AAAAAAAAAA
