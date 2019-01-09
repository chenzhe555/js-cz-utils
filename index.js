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
    },

    /*
    * 将时间差值转为 文本信息
    * timeInteval 时间差(秒)
    * */
    formateTimestampToText(timeInteval) {
        if (timeInteval <=0 ) return [0,0,0,0];
        //天数
        let days = Math.floor(timeInteval/(24*3600));
        if (days > 0) {
            timeInteval = timeInteval - days*24*3600;
        }
        //小时
        let hours = Math.floor(timeInteval/3600)
        if (hours > 0) {
            timeInteval = timeInteval - hours*3600
        }
        //分钟
        let minutes = Math.floor(timeInteval/60)
        if (minutes > 0) {
            timeInteval = timeInteval - minutes*60;
        }
        //秒数
        return [days,hours,minutes,timeInteval];
    },

    /*获取某年某月总天数*/
    getMonthDayTime(year, month) {
        return (new Date(year,month,0)).getDate();
    },

    /*
    * 获取某天是星期几(0是星期天)
    * */
    getToadyWeek(year, month, day) {
        return (new Date(year, parseInt(month) - 1, day)).getDay();
    }

}

module.exports = {
    DateUtil: DateUtil
}
