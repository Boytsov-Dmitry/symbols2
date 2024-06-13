import json from './js/parser.js'
import read from './js/reader.js'

class GameSaving {
    constructor(id, created, userInfo) {
      this.id = id;
      this.created = created;
      this.userInfo = userInfo;
    };
};
  

class GameSavingLoader {
    static async load() {
        const a = await read();
        const b = await json(a);
        let loadgs = new GameSaving();
        loadgs = JSON.parse(b);
        return loadgs;
    };
};


export default async function loadGS() {
    try {
        return await GameSavingLoader.load()
    }
    catch (error) {
        return error
    };
};




