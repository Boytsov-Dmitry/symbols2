import Character from './MainCharacter';

export default class Zombie extends Character {
    constructor(name, type) {
        super(name, type);
        this.type = 'Zombie';
        this.attack = 40;
        this.defence = 10;
    };
};