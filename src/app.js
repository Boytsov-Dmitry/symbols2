export default class Team {
    constructor() {
      this.members = [],
      this [Symbol.iterator] = function() {
        let index = 0;
        let members = [...this.members];
        return {
          next() {
            if (index >= members.length) {
              return { 
                done: true 
              };
            } else {
              const value = members[index];
              index++;
              return {
                value, 
                done: false 
              };
            };
          }
        };
      };
    };
    
    add(character) {
        this.members.push(character);
    };
};