// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
var vowels = "aeiou"

function isVowel(char){
    return "aeiou".indexOf(char) >= 0 ;
}


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){
    var result = [];
    phrase.split('').forEach(function (c){
        if (!isVowel(c)) {
            result.push(c + 'o' + c);
        } else {
            result.push(c);
        }
    });
return result.join('');
}

function translate2(phrase){
    var result = '';
    for (var i = 0; i < phrase.length; i++) {
        var c = phrase[i];
        if (!isVowel(c)) {
            result += c + 'o' + c;
        } else {
            result += c;
        }
    }
    return result;
}

function translate3(phrase) {
    return phrase.replace(/[^aeiou]/g, function (char) {
        return char + 'o' + char;
    });
}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(nums){
    return nums.reduce(function (a, b){
        return a + b;
    });
}

function multiply(nums){
    return nums.reduce(function f(a, b){
        return a * b;
    });
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    return phrase.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    return words.reduce(function (a, b){
        if (a.length > b.length) {
            return a;
        } else {
            return b;
        }
    });
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    return words.filter(function (w){
        return w.length > i;
    });
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    var result = {};
    string.split('').forEach(function (c){
        if (result[c]) {
            result[c]++;
        } else {
            result[c] = 1;
        }
    });
    return result;
}

function charFreq2(string){
    return string.split('').reduce(function(a, b){
        if (a[b]) {
            a[b]++;
        } else {
            a[b] = 1;
        }
        return a;
    }, {});
}
