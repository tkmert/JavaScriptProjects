const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};
var romanToInt = function(s) {
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let currentVal = romanMap[s[i]];
        let nextVal = romanMap[s[i + 1]];

        if (nextVal > currentVal) {
            total += nextVal - currentVal;
            i++; 
        } else {
            total += currentVal;
        }
    }
    return total;
};
console.log(romanToInt("III"));      
console.log(romanToInt("LVIII"));   
console.log(romanToInt("MCMXCIV"));  
