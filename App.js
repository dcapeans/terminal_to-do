import readlineSync from "readline-sync"
import fs from "fs"
import chalk from "chalk"

const listArray = JSON.parse(fs.readFileSync("./list.json", "utf-8"))

const options = [ "add", "list", "remove"]
const index = readlineSync.keyInSelect(options, "Type your command :")

if(index === 0){
    const newItem = chalk.red(readlineSync.question("What do you want to do? "))
    listArray.data.push(newItem)
    fs.writeFileSync("./list.json", JSON.stringify(listArray))
} else if(index === 1){
    const allToDos = readlineSync.keyInSelect(listArray.data, "What do you want to check/uncheck? :")

} else if(index === 2){
    const remove = readlineSync.keyInSelect(listArray.data, "What todo do you want to remove? :")
    listArray.data.splice(remove, 1)
    fs.writeFileSync("./list.json", JSON.stringify(listArray))
}


