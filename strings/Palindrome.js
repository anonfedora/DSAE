const isPalindrome = str => {
    const reversed = str.toLowerCase().split("").reverse().join("");
    console.log(reversed);
    return str === reversed;
};

console.log(isPalindrome("race car"));
console.log(isPalindrome("mattam"));
console.log(isPalindrome("mattamo"));
