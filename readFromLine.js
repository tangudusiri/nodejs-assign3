const { stdin, stdout } = require("process")
const readline=require("readline")
const rl=readline.createInterface({
    input:stdin,
    output:stdout
})
rl.question("Please Enter Name",(ans)=>{
    console.log("Hello"+" "+ans)
    rl.close()
})