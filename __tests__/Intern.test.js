const Intern = require("../lib/Intern")
const intern = new Intern("Tim", 96, "tim@yahoo.com", 'Clemson')

test('testing getSchool()', () => {
    expect(intern.getSchool()).toEqual('Clemson') 
})

test('testing getRole()', () => {
    expect(intern.getRole()).toEqual('Intern')
})