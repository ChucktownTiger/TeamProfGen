const Engineer = require("../lib/Engineer")
const engineer = new Engineer("tim", 96, "tim@yahoo.com", 'tim96')

test('testng getGithub()', () => {
    expect(engineer.getGithub()).toEqual('tim96')
})

test('testing getRole()', () => {
    expect(engineer.getRole()).toEqual('Engineer')
})