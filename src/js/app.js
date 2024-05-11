export default function orderByProps(obj, order) {
    let a = new Array();
    let b = new Array();
    let mergedArr = new Array();
   
    for(let key in obj) {
        if (order.includes(key)) {
            a.push({key: key, value: obj[key]})
        } else {
            b.push({key: key, value: obj[key]})
        };
    };

    b.sort((a, b) => {
        if (a.key >= b.key) {
          return 1;
        } else {
          return -1;
        }
    });

    mergedArr = [...a, ...b];
    return mergedArr
};

