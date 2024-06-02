import Magician from "../Magician";
import Daemon from "../Daemon";

test('проверка атаки маг(обычная)', () =>{
    const mage = new Magician();
    mage.distance = 2;
    expect(mage.attack).toBe(90);
});

test('проверка (наличие дурмана)', () =>{
    const mage = new Magician();
    mage.stoned = true;
    expect(mage.stoned).toBe(true);
});

test('проверка атаки маг(с дурманом)', () =>{
    const mage = new Magician();
    mage.distance = 3;
    mage.stoned = true;
    expect(mage.attack).toBe(72);
});

test('проверка атаки демон(обычная)', () =>{
    const demon = new Daemon();
    demon.distance = 4;
    expect(demon.attack).toBe(70);
});

test('проверка (наличие дурмана)', () =>{
    const demon = new Daemon();
    demon.stoned = true;
    expect(demon.stoned).toBe(true);
});

test('проверка атаки демон(с дурманом)', () =>{
    const demon = new Daemon();
    demon.distance = 5;
    demon.stoned = true;
    expect(demon.attack).toBe(48);
});




