// eslint-disable-next-line import/no-extraneous-dependencies
import browserslist from 'browserslist'

// prints to terminal list of browsers that matches browserlist config file
// eslint-disable-next-line no-console
console.log(browserslist())

// prints to terminal total users coverage for selected browsers
// eslint-disable-next-line no-console
console.log(`coverage: ${browserslist.coverage(browserslist())}%`)
