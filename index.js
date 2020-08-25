const convertValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const substractionConditions = ['IV','IX','XL','XC','CD','CM']

let romanToInt = function(romanStr) {
    let sum = 0;
    const arr = romanStr.split('');
    substractionConditions.forEach(value => {
        const condition = romanStr.indexOf(value);
        if(condition !== -1) {
            arr.splice(condition, 1);
            sum -= convertValues[value[0]];
        }
    })

    arr.forEach(value => sum += convertValues[value]);
    return sum
}

romanToInt("LXVII");

