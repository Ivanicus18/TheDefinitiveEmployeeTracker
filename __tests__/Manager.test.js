const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
    const manager = new Manager ('Jim', 'jim@gmail.com', 123456, 5176078299);

    expect(manager.name).toBe('Jim');
    expect(manager.email).toBe('jim@gmail.com');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.phone).toEqual(expect.any(Number));
})