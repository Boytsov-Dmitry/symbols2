import Team from "../app";

test('проверка добавления пользователя', () =>{
    const players = new Team();
    players.add('a')
    const correct = new Set('a')
    expect(players.members).toEqual(correct);
});

test('проверка добавления такого же пользователя', () =>{
    const players = new Team();
    players.add('a')
    players.add('a')
    const result = players.add('a')
    console.log(result)
    expect(result).toBe(new Error(`Персонаж '${character}' уже добавлен в команду`));
});

test('проверка добавления нескольких пользователей', () =>{
    const players = new Team();
    players.addAll('a', 'b', 'c', 'c')
    const correct = new Set(['a', 'b', 'c'])
    expect(players.members).toEqual(correct);
});

test('проверка преобразования в массив', () =>{
    const players = new Team();
    players.addAll('a', 'b', 'c')
    const result = players.toArray();
    const correct = ['a', 'b', 'c']
    expect(result).toEqual(correct);
});

