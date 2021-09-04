var workshop = {
  teacher: "Some name",
  ask(question) {
    console.log(this.teacher, question);
  },
};
workshop.ask("It's a namespace");
