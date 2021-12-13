const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern ('Carl', 'carl@gmail.com', 1234567, 'MSU');

    expect(intern.name).toBe('Carl');
    expect(intern.email).toBe('carl@gmail.com');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toBe('MSU');
})