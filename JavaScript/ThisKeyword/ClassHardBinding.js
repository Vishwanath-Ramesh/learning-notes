class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Kyle");

setTimeout(deepJS.ask, 100, "Still losing 'this'"); // undefined Still losing 'this'
setTimeout(deepJS.ask.bind(deepJS), 100, "Still losing 'this'"); // Kyle Still losing 'this'
