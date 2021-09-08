const Manager = require("../lib/Manager");

test('Manager should have a office #', () => {
  const manager = new Manager('JB', 18, 'enginer@eng.com', '18')

  expect(manager.getOffice()).toEqual(expect.stringContaining(manager.office.toString()));
}); 