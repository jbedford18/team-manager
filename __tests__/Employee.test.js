const Employee = require('../lib/Employee')


test('creates an employee object id', () => {
    const employee = new Employee('JB',30)

    expect(employee.id).toEqual(expect.any(Number));

    
});

