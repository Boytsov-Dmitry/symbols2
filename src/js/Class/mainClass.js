export default class Math {
    constructor () {
        this.stoned = false;
        this.distance = 1;
    };

    set stoned(quality) {
        this._stoned = quality;
    };

    get stoned() {
        return this._stoned;
    };
    
    set attack(qualityOfAttack) {
        this._attack = qualityOfAttack;
    };

    get attack() {
        const attackCalculation = this._attack - (this.distance - 1) * (this._attack * 0.1);

        if(this.stoned){
            const log = Math.log2(this.distance);
            return Math.round(attackCalculation - log * 5);
        };

        return attackCalculation;
    };
};