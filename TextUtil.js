export const TextUtil = {
    /*
    * 删除文本中所有的空格
    * return 删除所有空格后的文本
    * */
    deleteAllSpace(text = '') {
        return text.replace(/\s+/g, "");
    },

    /*
    * 删除文本中前后的空格
    * return 删除前后空格后的文本
    * */
    deletePreAndSufSpace(text = '') {
        return text.replace(/(^\s*)|(\s*$)/g, "");
    }
}