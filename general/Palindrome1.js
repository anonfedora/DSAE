const palindrome = word => {
    return palindromeHelper(word, 0, word.length - 1);
};

const palindromeHelper = (word, begin, end) => {
    if (begin >= end) {
        return true;
    }else if (word.charAt(begin) != word.charAt(end)){
      return false
      
    } else {
        return palindromeHelper(word, begin + 1, end - 1);
    }
};
console.log(palindrome(("lol")));
