var teacher = "Kyle";

function ask(question) {
  console.log(teacher, question); // Kyle Why?
}

function anotherClass() {
  var teacher = "Suzy";

  ask("Why?");
}

anotherClass();
