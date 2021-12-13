const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer ('Bob', 'bob@gmail.com', 123456, 'bob@github.com');

    expect(engineer.name).toBe('Bob');
    expect(engineer.email).toBe('bob@gmail.com');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toBe('bob@github.com');
})