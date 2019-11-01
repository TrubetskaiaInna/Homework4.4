const passSnail = (cols, rows, c0, r0) => {
  const numberIter = Math.max(rows, cols)
  const arrResult = []

  arrResult.push([r0, c0])

  c0 = c0 + 1
  if (r0 >= 0 && r0 < rows && c0 >= 0 && c0 < cols) {
    arrResult.push([r0, c0])
  }

  r0 = r0 + 1
  if (r0 >= 0 && r0 < rows && c0 >= 0 && c0 < cols) {
    arrResult.push([r0, c0])
  }
}
