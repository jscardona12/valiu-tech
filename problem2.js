const countSwaps = (arr) => {
    if (arr.length < 2) {
        return 0;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return countSwaps(leftArr) + countSwaps(rightArr) + mergeAndCountSwaps(arr, leftArr, rightArr);
}

function mergeAndCountSwaps(arr, leftArr, rightArr) {
    let i = 0, leftIndex = 0, rightIndex = 0, swaps = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] <= rightArr[rightIndex]) {
            arr[i] = leftArr[leftIndex];
            leftIndex++;
        } else {
            arr[i] = rightArr[rightIndex];
            rightIndex++;
            swaps += (leftArr.length - leftIndex);
        }
        i++;
    }

    while (leftIndex < leftArr.length) {
        arr[i] = leftArr[leftIndex];
        leftIndex++;
        i++;
    }

    while (rightIndex < rightArr.length) {
        arr[i] = rightArr[rightIndex];
        rightIndex++;
        i++;
    }

    return swaps;
}


let arr = [3, 4, 6, 1, 2, 5];
console.log(countSwaps(arr));

