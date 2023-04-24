// Write your code below // PALINDROME

// Check to see if we write the word forward and then write it back word if it is the same

function isPalindrome(word) {
    let splitWord = word.split("");
    let reverseArray = splitWord.reverse();
    let joinArr = reverseArray.join(""); 
    if (word === joinArr) {
        return 'is palindrome'
    }
    else {
        return 'is not palindrome'
    }
}
console.log(isPalindrome('racecar'))
