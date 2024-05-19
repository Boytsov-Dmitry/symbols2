export default class Validator {
    constructor (userName) {
        this.userName = userName;    
    };
  
    validateUsername(str) {
        str = this.userName;
        return /^[a-z][a-z-_]*[\d]{0,3}[a-z-_]*[a-z]$/.test(str.toLowerCase());
    };
};
