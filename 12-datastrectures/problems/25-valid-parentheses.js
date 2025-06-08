/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length%2 !==0) return false;

    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let stack = [];

    for(char of s){
        if(bracketsMap[char]) {
            stack.push(char);
            continue
        }
        if(char !== bracketsMap[stack.pop()]) return false
    }

    if(stack.length !== 0) return false;
    return true
};