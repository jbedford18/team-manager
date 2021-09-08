const Intern = require("../lib/Intern");

test('Intern should have a university', () => {
  const intern = new Intern('JB', 18, 'enginer@eng.com', 'ucf')

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
}); 