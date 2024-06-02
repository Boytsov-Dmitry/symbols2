import ArrayBufferConverter from "../app.js";

test('проверка перевода ArrayBuffer в строку', () =>{
    const transformer = new ArrayBufferConverter();
    const result = transformer.toString();
    const correct = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(result).toBe(correct);
});

