const nl2br = (str) => {
    var res = str.toString().replace(/\r\n/g, "<br>");
    res = res.toString().replace(/(\n|\r)/g, "<br>");
    return res;
}
export { nl2br } // 別のファイルで使えるようにexportする 56

const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = ("0"+(today.getMonth()+1)).slice(-2); const dd = ("0"+today.getDate()).slice(-2);
    return yyyy+'-'+mm+'-'+dd;
    }
export { getToday }