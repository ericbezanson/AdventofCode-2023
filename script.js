
const arr = [4, 2, 2, 1, 0, 0]

let pointTotal = 0

for (i = 0; i < arr.length; i++) {
  let points = 0
  for (x = 0; x < arr[i]; x++) {
    if (x === 0) {
      points = 1
    } else {
      points = points * 2
    }
  }
  pointTotal = pointTotal + points
}

console.log(pointTotal)