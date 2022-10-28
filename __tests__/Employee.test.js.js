const Employee = require("../lib/Employee")
const employee = new Employee("Tim", 96, "tim@yahoo.com")

test('testing employee class', () => { 
    expect(typeof employee == "object").toEqual(true)
})

test('testing getname()', () => {
    expect(employee.getName()).toEqual("Tim")
})

test('testing getId()', () => {
    expect(employee.getId()).toEqual(96)
})

test('testing getEmail()', () => {
    expect(employee.getEmail()).toEqual('tim@yahoo.com')
})

test('testing getRole()', () => {
    expect(employee.getRole()).toEqual('Employee')
})