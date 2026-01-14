const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const secord = readFileSync('./content/secord.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `here is the result : ${first}, ${secord}`,
  { flag: 'a' }
)

console.log('done with this task for now')
console.log('starting the next one ')
  