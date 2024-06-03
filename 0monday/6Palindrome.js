const isPalindrome = word => {
    return word.split("").reverse().join("").toLowerCase() == word.toLowerCase();
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("pallaP"));
