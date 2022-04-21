// forEach
// doubleValues
function doubleValues(arr) {
    let newArray = [];
    arr.forEach(function (val) {
        newArray.push(val * 2);
    })
    return newArray;
}

// onlyEvenValues
function onlyEvenValues(arr) {
    let newArray = [];
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            newArray.push(val);
        }
    })
    return newArray;
}

// showFirstAndLast
function showFirstAndLast(arr) {
    let newArray = [];
    arr.forEach(function (i) {
        newArray.push(i[0] + i.slice(-1));
    })
    return newArray;
}

// addKeyAndValue
function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val) {
        val[key] = value;
    })
    return arr;
}

// vowelCount
function vowelCount(str) {
    let splitArr = str.split("");
    const vowels = 'aeiou';
    let obj = {};

    splitArr.forEach(function (letter) {
        let lowerCasedLetter = letter.toLowerCase();
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}

// map
// doubleValuesWithMap
function doubleValuesWithMap(arr) {
    return arr.map(function (val) {
        return val * 2;
    })
}

// onlyEvenValues
function valTimesIndex(arr) {
    return arr.map(function (val) {
        return val * arr.indexOf(val);
    })
};

// extractKey
function extractKey(arr, key) {
    return arr.map(function (val) {
        return val[key];
    })
};

// extractFullName
function extractFullName(arr) {
    return arr.map(function (val) {
        return val.first + ' ' + val.last;
    })
};

// filter
// filterByValue
function filterByValue(arr, key) {
    return arr.filter(function (val) {
        return val[key] !== undefined;
    })
};

// find
function find(arr, val) {
    return arr.filter(function (num) {
        if (val === num) {
            return val;
        }
    })[0];
};

// findInObj
function findInObj(arr, key, value) {
    return arr.filter(function (val) {
        return val[key] === value;
    })[0];
}

// removeVowels
function removeVowels(str) {
    let vowels = 'aeiou';
    return str
        .toLowerCase()
        .split("")
        .filter(function (val) {
            return vowels.indexOf(val) === -1;
        })
        .join("");
}

// doubleOddNumbers
function doubleOddNumbers(arr) {
    return arr
        .filter(function (val) {
            return val % 2 !== 0;
        })
        .map(function (val) {
            return val * 2;
        });
}