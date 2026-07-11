class Solution:
    def isPalindrome(self, s: str) -> bool:
        left_indx_pointer = 0
        right_indx_pointer = len(s) - 1
        count = 0

        while left_indx_pointer <= right_indx_pointer:
            if (not isAlphaNumeric(s[left_indx_pointer].lower())):
                left_indx_pointer += 1
                continue

            if (not isAlphaNumeric(s[right_indx_pointer].lower())):
                right_indx_pointer -= 1
                continue

            if (s[left_indx_pointer].lower() == s[right_indx_pointer].lower()):
                left_indx_pointer += 1
                right_indx_pointer -= 1
            else:
                return False

        return True


def isAlphaNumeric(s: str) -> bool:
    alpha_numeric_str = 'qwertyuiopasdfghjklzxcvbnm0123456789'

    return s in alpha_numeric_str