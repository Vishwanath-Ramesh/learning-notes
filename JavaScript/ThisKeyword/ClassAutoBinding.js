class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = (question) => {
      console.log(this.teacher, question);
    };
  }
}

var deepJS = new Workshop("Kyle");

setTimeout(deepJS.ask, 100, "Is 'this' fixed"); // Kyle Is 'this' fixed
