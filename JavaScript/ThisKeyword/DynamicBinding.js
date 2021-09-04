function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask,
};

var workshop2 = {
  teacher: "Suzy",
  ask,
};

workshop1.ask("Dynamic binding");
workshop2.ask("Dynamic binding");
