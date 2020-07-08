function cloneDeep (obj) {
  if (obj == null || typeof (obj) !== 'object') {
    return obj
  }

  var temp = new obj.constructor()

  for (var key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      temp[key] = cloneDeep(obj[key])
    }
  }

  return temp
}

export default cloneDeep
