  const Engineer = require("../lib/Engineer");

  test('Engineer should have github', () => {
    const engineer = new Engineer('JB', 18, 'enginer@eng.com', 'jbjb18')

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
}); 