const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8', (err, result) => {

    if (err) {
        console.log(err)
        return
    }
const first = result;
readFile('./content/secord.txt','utf8',(err,result)=>{
 
    if (err) {
      console.log(err)
      return
    }
    const secord = result
    writeFile(
      './content/result-async.txt',
      `here is the result : ${first}, ${secord}`,(err,result)=>{
        if (err) {
          console.log(err)
          return   
        }
        console.log(result)

   }
    )

})

  console.log(result);
     
})