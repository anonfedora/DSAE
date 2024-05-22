const maxChar = str => {
    const charMap = {};
    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1;
        } else {
            charMap[char] = 1;
        }
    }

console.log(Object.entries(charMap))
    for (let [key, value] of Object.entries(charMap)) {
        console.log(key, value);
    }
    return charMap;
};

console.log(maxChar("abccccccccd"));
