import orderByProps from "../app";

test('тест сортировки по свойствам объекта', () => {
    const obj = {
        name: 'мечник', 
        health: 10, 
        level: 2, 
        attack: 80, 
        defence: 40
    };
    let order = ["name", "level"];
    const result = orderByProps(obj, order);
    const correctArray = [
        {key: "name", value: "мечник"}, 
        {key: "level", value: 2}, 
        {key: "attack", value: 80}, 
        {key: "defence", value: 40}, 
        {key: "health", value: 10} 
    ]

    expect(result).toEqual(correctArray)
})