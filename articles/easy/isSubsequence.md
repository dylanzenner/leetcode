# Leetcode Daily: Is Subsequence

[Python Solution](#python-solution)

[JavaScript Solution](#javascript-solution)

[TypeScript Solution](#typescript-solution)

[Golang Solution](#golang-solution)

[c Solution](#c-solution)

<strong>Problem:</strong> Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise. 

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e. `ace` is a subsequence of `abcde` while `aec` is not).

<strong>Example 1:</strong> Input: s = "abc", t = "ahbgdc"
<br/>
Output: true

<strong>Example 2:</strong> Input: s = "axc", t = "ahbgdc"
<br/>
Output: false

Constraints:
- 0 <= s.length <= 100
- 0 <= t.length <= 10<sup>4</sup>
- `s` and `t` consist only of lowercase english letters

<strong>Follow up:</strong> suppose there are lots of incoming `s` say s<sub>1</sub>,...s<sub>k</sub> where k >= 10<sup>9</sup>, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?

You can find the code here: `git repo link`

<strong>Thought Process:</strong> The first thing we are going to want to do is handle the edge case of an empty string `""`. An empty string should return `True`. Remember we can remove letters but we cannot change the arrangement of letters so with that in mind if we remove all of the letters in the string we end up an empty string.

Now that we have the empty string handled we need to solve the rest of the problem. This problem can be solved using the 2-pointer method. This is one of my favorite methods to use. Basically what we are going to do here is loop through the string `t` while using one pointer to keep track of where we are in the string `s` and another pointer to keep track of where are in the string `t`. Each iteration of the loop we are going to check if both pointers are pointing to the same character in their respective strings. If they are then we will increment the `s_pointer`. We know we are going to be checking every character in `t` so we will increment that pointer on each iteration no matter what. 

When / if the `s_pointer` ever becomes equal to the length of the string `s` we know that the substring `s` exists in the string `t` and can exit the loop.

Now that we know how to solve the problem we can translate it to our favorite languages:

### Python solution

```python
def isSubsequence(s: str, t: str) -> bool:
    if s == "": return True
    s_pointer = 0
    t_pointer = 0
    
    while t_pointer < len(t):
        if s_pointer == len(s): break
        if t[t_pointer] == s[s_pointer]:
            s_pointer += 1
        t_pointer += 1
    return s_pointer == len(s)

# Time Complexity: O(n)
# Space Complexity: O(1)

```

### Python test cases:
```python
import unittest
from easy.isSubsequence import isSubsequence

class TestIsSubsequence(unittest.TestCase):

    def test_isSubsequence(self):
        self.assertTrue(isSubsequence(s="abc", t="ahkljblsjdfkjc"))
        self.assertFalse(isSubsequence(s="abc", t="ahkljblsjdfkj"))
        self.assertTrue(isSubsequence(s="", t="ahkljblsjdfkj"))


if __name__ == "__main__":
    unittest.main()
```

### Execute the test cases with: 
```bash
python3 -m unittest test.easy.test_isSubsequence
```

### Golang Solution
```golang

```

### Golang test cases:
```golang

```

### Execute the test cases with: 
```bash

```

### JavaScript Solution:
```javascript
function isSubsequence(s, t){
    if(s === ""){
        return true
    }

    let s_pointer = 0
    let t_pointer = 0

    while(t_pointer < t.length){
        if(s_pointer === s.length){
            break
        }

        if(t[t_pointer] ==s s[s_pointer]){
            s_pointer += 1
        }

        t_pointer += 1
    }

    return s_pointer === s.length
}
```

### JavaScript test cases:
```javascript
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
```

### Execute the test cases with: 
```bash
jest isSubsequence.test.js
```

### TypeScript Solution:
```typescript
function isSubsequence(s: string, t: string): boolean{
    if(s === ""){
        return true
    }

    let s_pointer: number = 0
    let t_pointer: number = 0

    while(t_pointer < t.length){
        if(s_pointer === s.length){
            break
        }

        if(t[t_pointer] == s[s_pointer]){
            s_pointer += 1
        }

        t_pointer += 1
    }

    return s_pointer === s.length
}
```

### TypeScript test cases:
```typescript
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
```

### Execute the test cases with: 
```bash
jest isSubsequence.test.ts
```

### C Solution:
```c

```

### C test cases:
```c

```

### Execute the test cases with: 
```bash

```



### Follow up answer:

I would change my code to be asynchronous. This would allow us to check more than one string `s` at a time.