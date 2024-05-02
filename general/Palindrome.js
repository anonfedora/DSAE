const isPalindrome = word => {
    return isPalindromeHelper(word, 0, word.length - 1);
};
const isPalindromeHelper = (word, begin, end) => {
    if (begin >= end) {
        return true;
    }
    if (word.charAt(begin) != word.charAt(end)) {
        return false;
    } else {
        return isPalindromeHelper(word, begin + 1, end - 1);
    }
};

console.log(isPalindrome(["lolo"]));
