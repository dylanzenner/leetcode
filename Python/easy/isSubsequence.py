def isSubsequence(s: str, t: str) -> bool:
    if s == "": return True
    res = []
    pointer = 0
    for c in t:
        if pointer < len(s):
            if c == s[pointer]:
                pointer += 1
                res.append(c)
    return s == ''.join(res)
