const { parse } = require("semver");

module.exports = function toReadable(number) {
    const array1 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const array11 = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const array10 = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const numStr = number.toString();

    if (numStr.length === 1) {
        if (numStr === "0") return "zero";
        return array1[numStr];
    }
    if (numStr.length === 2) {
        if (numStr[1] === "0") {
            return array10[numStr[0]];
        }
        if (parseInt(numStr[1]) >= 1 && parseInt(numStr[0]) === 1) {
            return `${array11[numStr[1]]}`;
        } else {
            return `${array10[numStr[0]] + " " + array1[numStr[1]]}`;
        }
    }
    if (numStr.length === 3) {
        if (parseInt(numStr[1]) === 0 && parseInt(numStr[2]) === 0) {
            return `${array1[numStr[0]] + " " + "hundred"}`;
        }
        if (parseInt(numStr[1]) === 0) {
            return `${
                array1[numStr[0]] + " " + "hundred" + " " + array1[numStr[2]]
            }`;
        }
        if (parseInt(numStr[1]) === 1 && parseInt(numStr[2]) !== 0) {
            return `${
                array1[numStr[0]] + " " + "hundred" + " " + array11[numStr[2]]
            }`;
        }
        if (parseInt(numStr[2]) === 0) {
            return `${
                array1[numStr[0]] + " " + "hundred" + " " + array10[numStr[1]]
            }`;
        } else {
            return `${
                array1[numStr[0]] +
                " " +
                "hundred" +
                " " +
                array10[numStr[1]] +
                " " +
                array1[numStr[2]]
            }`;
        }
    }
};
