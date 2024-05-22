export default class ErrorRepository {
    constructor(errorId, errorText) {
        this.errors = new Map();
        this.errorId = errorId;
        this.errors.set(
            this.errorId, 
            {errorId, errorText}
        );
    };
    
    translate(code) {
        if (!this.errors.has(code)) {
            throw new Error('Unknown error');
        };
        return this.errors.get(code).errorText;
    };
};
