const isPalindrome = word => {
    return isPalindromeHelper(word, 0, word.length - 1);
};

const isPalindromeHelper = (word, start, end) => {
    if (start >= end) return true;
    if (word.charAt(start) != word.charAt(end)) return false;
    if (
        word.charAt(start) == word.charAt(end) &&
        (word.length == 3 || word.length == 2)
    )
        return true;
    /*console.log("before recursion");
    console.log(word.slice(start, end + 1), start, end);*/
    return isPalindromeHelper(word, start + 1, end - 1);
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("carrot"));
console.log(isPalindrome("lol"));
console.log(isPalindrome("22"));
console.log("word".charAt());
