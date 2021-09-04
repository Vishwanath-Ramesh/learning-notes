// Compose
function compose(...fns) {
  return pipe(...fns.reverse());
}

// Pipe
function pipe(...fns) {
  return function piped(param) {
    for (let fn of fns) {
      param = fn(param);
    }

    return param;
  };
}
