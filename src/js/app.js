export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(character) {
        if(this.members.has(character)) {
            throw new Error(`Персонаж '${character}' уже добавлен в команду`)
        } else {
            this.members.add(character);
        };        
    };

    addAll(...players) {
        for(const character of players) {
            this.members.add(character);
        };
    };
    
    toArray() {
        return Array.from(this.members)
    };
};
