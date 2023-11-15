const nl2br = (str) => {
    var res = str.toString().replace(/\r\n/g, "<br>");
    res = res.toString().replace(/(\n|\r)/g, "<br>");
    return res;
}

export { nl2br } // 別のファイルで使えるようにexportする 56