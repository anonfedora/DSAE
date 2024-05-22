const maxChar = str => {
    const charMap = {};
    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1;
        } else {
            charMap[char] = 1;
        }
    }
    
    return charMap
};

console.log(maxChar("abccccccccd"));
