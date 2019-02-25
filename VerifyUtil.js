export const VerifyUtil = {
    /*
    * 校验手机格式
    * */
    checkPhoneFormat(phone = '') {
        if (phone.length <= 0) return false;
        phone = phone.toString();

        let regString = /^1\d{10}$/;
        if ((new RegExp(regString)).test(phone)) return true;
        else return false;
    },

    /*
    * 校验邮箱格式
    * */
    checkEmailFormat(email = '') {
        if (email.length == 0) return false;

        let regString = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if ((new RegExp(regString)).test(email)) return true;
        else return false;
    },

    /*
    * 校验身份证号
    * */
    checkCardNo(cardNo = '') {
        if (cardNo.length == 0) return false;

        let regString = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if ((new RegExp(regString)).test(cardNo)) return true;
        else return false;
    }
}