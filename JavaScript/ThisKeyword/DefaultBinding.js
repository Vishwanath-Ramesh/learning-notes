var teacher = "Kyle";

function ask(question) {
  console.log(this.teacher, question);
}

function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}

ask("What's the non-strict mode's default?"); // Kyle What's the non-strict mode's default?

askAgain("What's the strict mode's default?"); // TypeError. Because, specically in strict mode, when we invoke a function with no other "this" binding, the default behaviour is that leave "this" undefined whereas in non-strict(sloppy) mode, "this" points to global/window object.
