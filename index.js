const passSnail = (cols, rows, c0, r0) => {
  const numberIter = Math.max(rows, cols)
  const arrResult = []

  arrResult.push([r0, c0])

  for (let i = 1; i < numberIter + 3; i++) {
    if (i % 2 === 0) {
      for (let j = 1; j < i + 1; j++) {
        c0 = c0 - 1
        if (r0 >= 0 && r0 < rows && c0 >= 0 && c0 < cols) {
          arrResult.push([r0, c0])
        }
      }
      for (let j = 1; j < i + 1; j++) {
        r0 = r0 - 1
        if (r0 >= 0 && r0 < rows && c0 >= 0 && c0 < cols) {
          arrResult.push([r0, c0])
        }
      }
    } else {
      for (let j = 1; j < i + 1; j++) {
        c0 = c0 + 1
        if (r0 >= 0 && r0 < rows && c0 >= 0 && c0 < cols) {
          arrResult.push([r0, c0])
        }
      }
      for (let j = 1; j < i + 1; j++) {
        r0 = r0 + 1
        if (r0 >= 0 && r0 < rows && c0 >= 0 && c0 < cols) {
          arrResult.push([r0, c0])
        }
      }
    }
  }
  return arrResult
}
