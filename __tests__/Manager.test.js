const Manager = require("../lib/Manager")
const manager = new Manager("Tim", 96, "tim@yahoo.com", 693211)

test('testing getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toEqual(693211)
})

test('testing getRole()', () => {
    expect(manager.getRole()).toEqual('Manager')
})