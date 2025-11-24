const os = require('os')
const { release } = require('process')
// info about cureent user
const user = os.userInfo()
console.log(user)

// methd returns the system uptime in secs

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)

