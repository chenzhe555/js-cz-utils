/**
 * 1. getMonthDays：获取某年某月总天数
 */

/**
 * 获取某年某月总天数
 * @param {string|number} year 
 * @param {string|number} month 
 */
function getMonthDays(year, month) {
    return (new Date(year,month,0)).getDate();
}

function test() {
    console.log('date');
    return 'date';
}

export default {
    getMonthDays,
    test,
    DateNumber
}


