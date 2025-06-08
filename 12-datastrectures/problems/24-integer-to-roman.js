/**
 Key criteria for picking your shape
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const map = [
        [1000, "M"], [900, "CM"],
        [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"],
        [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"],
        [5, "V"], [4, "IV"],
        [1, "I"]
    ];

    let response = '';
    let i=0;
    
    while(num > 0) {
        const [value, symbol] = map[i];
        if(num - value < 0) {
            i++
            continue
            }
        response += symbol;
        num -= value;
        if(num===0) return response
    }

    return response;

};