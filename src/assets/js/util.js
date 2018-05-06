'use strict';

function secondToTime(result) {
    // let h = Math.floor(result / 3600);
    let m = Math.floor((result / 60 % 60));
    m = m < 10 ? "0" + m : m;
    let s = Math.floor((result % 60));
    s = s < 10 ? "0" + s : s;
    // let time = h + ":" + m + ":" + s;
    return m + ":" + s;
}


export default {
    secondToTime
}
