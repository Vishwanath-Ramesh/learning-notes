// Scope(Global)
var workshop = {
  // Not a scope(Objects are not scoped)
  teacher: "Kyle",
  ask(question) {
    // Scope
    setTimeout(() => {
      // Scope
      console.log(this.teacher, question);
    });
  },
};

workshop.ask("This is lexical 'this'"); // Kyle This is lexical 'this'
