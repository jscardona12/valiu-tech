const watchmen = (n, m, a, b) => {

    let rangeArr = [], i = 0;

    while (i <= n - 1) {
        const entry = a[i];
        const exit = b[i];
        rangeArr.push([entry,exit]);
        i++;
    }
     return mergeRangesAndCountDays(rangeArr);

}

const mergeRangesAndCountDays = (ranges) => {
    ranges.sort(function(a, b) { return a[0]-b[0] || a[1]-b[1] });
    let result = [], last;

    ranges.forEach(function (range) {
        if (!last || range[0] > last[1]){
            last = range;
            result.push(last);
        }
        else if (range[1] > last[1])
            last[1] = range[1];
    });
    let count = 0;
    result.forEach(range =>{
        count += range[1] - range[0] + 1;
    })

    return count;
}

console.log(watchmen(3,10,[2,1,8], [5,4,9]));
