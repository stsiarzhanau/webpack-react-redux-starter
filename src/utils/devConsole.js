const loggerCreator = (consoleObj, noLogPredicate = () => __PROD__, noLogFunc = () => { }) => {
  return Object.entries(consoleObj).reduce((acc, [key, val]) => {
    acc[key] = noLogPredicate() ? noLogFunc : val
    return acc
  }, {})
}

export default loggerCreator(console)
