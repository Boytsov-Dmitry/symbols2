import ErrorRepository from "../app";

test('проверка поиска ошибки по коду (удачный)', () =>{
    const error = new ErrorRepository(1, 'Так не бывает');
    const correct = 'Так не бывает';
    expect(error.translate(1)).toEqual(correct);
});

test('проверка поиска ошибки по коду (неудачный)', () =>{
    const error = new ErrorRepository(1, 'Так не бывает');
    const correct = 'Unknown error';
    expect(error.translate(2)).toEqual(correct);
});


