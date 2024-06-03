let path: string[] = __dirname.split('/').slice(0,-2);
path.push('easy', 'isSubsequence');
let newPath: string = path.join('/');

const isSubsequenceTest = require(newPath);

test('the empty string should always be a substring of another string', () => {
  expect(isSubsequenceTest("", "abcde")).toBe(true);
});

test('abc is a substring of alskhfblaksjfc', () => {
    expect(isSubsequenceTest("abc", "alskhfblaksjfc")).toBe(true);
});

test('abc is not a substring of alskhfblaksjf', () => {
    expect(isSubsequenceTest("abc", "alskhfblaksjf")).toBe(false);
});