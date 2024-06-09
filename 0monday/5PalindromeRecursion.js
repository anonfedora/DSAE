/**
 * @Author Musa Eleazar Shekoaga
 * class for swapping a pair of Linked List Nodes
 *
 * This function defines the data structure and validation rules for handling a basic
 * user query.
 *
 * @class Node
 * @function printList
 * @function push
 * @function pairwiseSwap
 * @property head - First Node
 *                        It must be a non-empty string.
 * return swapped List
 */
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
