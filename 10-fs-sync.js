const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const secord = readFileSync('./content/secord.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `here is the result : ${first}, ${secord}`, {flag: 'a'}
)

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const secord = readFileSync('./content/secord.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `here is the result : ${first}, ${secord}`, {flag: 'a'}
)
