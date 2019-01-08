'use strict';

const DateUtil = {
    /*
    * 时间戳转时间字符串
    * timestamp: 秒
    * formater: 转换格式，默认yyyy-MM-dd hh:mm:ss
    * */
    formatDate(timestamp, formater = 'yyyy-MM-dd hh:mm:ss') {
        //检查时间
        let timeInt = parseInt(timestamp);
        if (timeInt <= 0) return '';

        //初始化Date对象
        let date = new Date();
        date.setTime(timeInt*1000);

        //拼成时间字符串
        let obj = {
            "M+": date.getMonth() + 1, //月
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        }
        if (/(y+)/.test(formater)) formater = formater.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (const key in obj) {
            if (new RegExp("(" + key + ")").test(formater)) formater = formater.replace(RegExp.$1, (RegExp.$1.length === 1) ?
                (obj[key]) : (("00" + obj[key]).substr(("" + obj[key]).length)));
        }
        return formater;
    }
}

module.exports = {
    DateUtil: DateUtil
}
