export default class Team {
  constructor() {
    this.members = []
  };

  *[Symbol.iterator]() {
    for (let item of this.members) {
        yield item;
    };
  };
  
  add(character) {
      this.members.push(character);
  };
};
