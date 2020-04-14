let numArray = [3, 6, 2, 9, -1, 10, 0, 0, 0, 0, 100]

const solution = (arr) => {
    let sol = ""
    let left = 0
    let right = 0

    let i = 1
    let val = 0

    while (val < arr.length) {
        for (let num = 0; num < i; num++) {
            val++
            left += arr[val] || 0
        }
        for (let num = 0; num < i; num++) {
            val++
            right += arr[val] || 0
        }
        i = i * 2
    }

    if (left > right) {
        sol = "Left"
    } else if (right > left) {
        sol = "Right"
    }
    return sol
}

console.log(solution(numArray))