export default class Team {
  constructor() {
    this.members = []
  };

  *[Symbol.iterator]() {
    let index = 0;
    while (index < this.members.length) {
      yield this.members[index];
      index++;
    };
  };
  
  add(character) {
      this.members.push(character);
  };
};