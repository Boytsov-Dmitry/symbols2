import Team from '../app.js';
import char1 from '../js/players.js'

test('проверка вывода команды',() =>{
    const team = new Team();
    team.add(char1);

    const correct = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    }

    for (const member of team) {
        const enemy = member;
        return enemy;
    };

    expect(result).toEqual(enemy);

});

