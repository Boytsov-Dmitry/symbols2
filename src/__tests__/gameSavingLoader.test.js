import loadGS from '../app.js';

test('проверка возвращенного объекта', async () =>{
    const correct = {
        "id": 9,
        "created": 1546300800,
        "userInfo": {
            "id": 1,
            "name": "Hitman",
            "level": 10,
            "points": 2000
        }
    };

    const result = await loadGS()
    expect(result).toEqual(correct);

});

