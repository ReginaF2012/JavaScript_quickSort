function partition(arr, start, end) {
    // For random pivot use => arr[Math.floor(Math.random() * (end - start + 1) + start)];
    const pivotVal = arr[Math.floor((start + end) / 2)];

    while (start <= end) {
        while (arr[start] < pivotVal) {
            start++;
        }
        while (arr[end] > pivotVal) {
            end--;
        }

        if (start <= end) {
            // swap
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }

    return start;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const index = partition(arr, start, end);

        quickSort(arr, start, index - 1);
        quickSort(arr, index, end);
    }

    return arr;
}
