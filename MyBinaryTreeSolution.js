let arr = [3, 6, 2, 9, -1, 10, 0, 0, 0, 0, 100]

const solution = (numberArray) => {
    let sol = ""
    let left = 0
    let right = 0

    let quantityPerLevel = 1
    let numberArrayIndex = 0

    while (numberArrayIndex < numberArray.length) {
        for (let i = 0; i < quantityPerLevel; i++) {
            numberArrayIndex++
            left += arr[numberArrayIndex] || 0
        }
        for (let i = 0; i < quantityPerLevel; i++) {
            numberArrayIndex++
            right += arr[numberArrayIndex] || 0
        }
        quantityPerLevel = quantityPerLevel * 2
    }

    if (left > right) {
        sol = "Left"
    } else if (right > left) {
        sol = "Right"
    }
    return sol
}

console.log(solution(arr))