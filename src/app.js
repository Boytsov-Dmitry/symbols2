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
    static load() {
            return read()
        .then(response => {
            return json(response);
        })
        .then(data =>{
            let loadgs = new GameSaving();
            loadgs = JSON.parse(data);
            return loadgs;
        })
        .catch(error => reject(error));
    };
};


export default function loadGS() {
    return GameSavingLoader.load().then((saving) => {
        return saving
        }, (error) => {
        return error
    });
};




