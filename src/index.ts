interface ClassArgs {
  [className: string]: boolean
}

export default (args: ClassArgs): string => {
  if (!Object.keys(args).length) return ''
  let combineClass = ''
  for (const key in args) {
    if (args[key] === true) combineClass += ' ' + key
  }
  return combineClass
}

// created by jinwan
