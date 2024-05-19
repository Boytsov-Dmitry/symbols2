import Validator from "../app";

test('проверка имени пользователя с выполнением условий', () =>{
    const user = new Validator('Brown_Go');
    const result = user.validateUsername();
    expect(result).toBe(true);
});

test('проверка имени пользователя (начинается с цифр))', () =>{
    const user = new Validator('20Brown');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('проверка имени пользователя (заканчивается цифрами)', () =>{
    const user = new Validator('Brown20');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('проверка имени пользователя (более 4 цифр подряд)', () =>{
    const user = new Validator('Bro2024wn');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('проверка имени пользователя (начинается с тире)', () =>{
    const user = new Validator('-Brown');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('проверка имени пользователя (начинается с подчеркивания)', () =>{
    const user = new Validator('_Brown');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('проверка имени пользователя (заканчивается с тире)', () =>{
    const user = new Validator('Brown_');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('проверка имени пользователя (заканчивается с подчеркивания)', () =>{
    const user = new Validator('Brown-');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('проверка имени пользователя с выполнением условий', () =>{
    const user = new Validator('Andrew18Brown');
    const result = user.validateUsername();
    expect(result).toBe(true);
});