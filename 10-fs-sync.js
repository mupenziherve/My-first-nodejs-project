const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const secord = readFileSync('./content/secord.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `here is the result : ${first}, ${secord}`, {flag: 'a'}
)

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content')

  console.log(result)
})