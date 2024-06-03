import unittest
from easy.isSubsequence import isSubsequence

class TestIsSubsequence(unittest.TestCase):

    def test_isSubsequence(self):
        self.assertTrue(isSubsequence(s="abc", t="ahkljblsjdfkjc"))
        self.assertFalse(isSubsequence(s="abc", t="ahkljblsjdfkj"))
        self.assertTrue(isSubsequence(s="", t="ahkljblsjdfkj"))


if __name__ == "__main__":
    unittest.main()