interface ClassArgs {
  [className: string]: boolean
}

export default (args: ClassArgs): string => {
  if (!Object.keys(args).length) return ''

  return Object.keys(args).reduce((combineClass, curClass) => {
    if (args[curClass] === true) combineClass += ' ' + curClass
    return combineClass
  }, '')
}

// created by jinwan
