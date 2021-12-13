const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee ('Dave', 'dave@gmail.com', 65454545);

    expect (employee.name).toBe('Dave');
    expect (employee.email).toBe('dave@gmail.com');
    expect (employee.id).toEqual(expect.any(Number));
});