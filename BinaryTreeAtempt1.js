let arr = [3, 6, 2, 9, -1, 10]

const solution = (arr) => {
    let sol = ""
    let left = 0 // arr[1] + arr[3] + (arr[4] || 0)
    let right = 0 // arr[2] + (arr[5] || 0) + (arr[6] || 0)

    let lval = [1, 3, 4, 7, 8, 9, 10,]
    let rval = [2, 5, 6, 11, 12, 13, 14]

    lval.forEach(e => {
        left += arr[e] || 0
    });

    rval.forEach(e => {
        right += arr[e] || 0
    })

    if (left > right) {
        sol = "Left"
    } else if (right > left) {
        sol = "Right"
    }
    return sol
}

console.log(solution(arr))