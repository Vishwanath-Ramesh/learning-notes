var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask, 10, "Lost this?"); // undefined Lost this?
setTimeout(workshop.ask.bind(workshop), 10, "Lost this?"); // Kyle Lost this?
