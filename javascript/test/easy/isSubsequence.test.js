let path = __dirname.split('/').slice(0,-2)
path.push('easy', 'isSubsequence')
path = path.join('/')
const isSubsequence = require(path);

test('the empty string should always be a substring of another string', () => {
  expect(isSubsequence("", "abcde")).toBe(true);
});

test('abc is a substring of alskhfblaksjfc', () => {
    expect(isSubsequence("abc", "alskhfblaksjfc")).toBe(true);
});

test('abc is not a substring of alskhfblaksjf', () => {
    expect(isSubsequence("abc", "alskhfblaksjf")).toBe(false);
});