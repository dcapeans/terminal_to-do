import readlineSync from "readline-sync"
import fs from "fs"

const listArray = JSON.parse(fs.readFileSync("./list.json", "utf-8"))

const options = [ "add", "list", "remove"]
const index = readlineSync.keyInSelect(options, "Type your command :")

if(index === 0){
    const newItem = readlineSync.question("What do you want to do? ")
    listArray.data.push(`🔴 ${newItem}`)
    listArray.tasks.push(newItem)
    fs.writeFileSync("./list.json", JSON.stringify(listArray))
} else if(index === 1){
    const checkId = readlineSync.keyInSelect(listArray.data, "What do you want to check/uncheck? :")
    if(listArray.checked.includes(checkId)){
        // trocar o icone do item pra vermelho
        listArray.data.splice(checkId, 1, `🔴 ${listArray.tasks[checkId]}`)
        // remover o item da array de checked
        const itemIndex = listArray.checked.indexOf(checkId)
        listArray.checked.splice(itemIndex, 1)
    } else {
        // trocar o icone do item pra verde
        listArray.data.splice(checkId, 1, `🟢 ${listArray.tasks[checkId]}`)
        // adicionar o index dele na array checked
        listArray.checked.push(checkId)
    }
    fs.writeFileSync("./list.json", JSON.stringify(listArray))

} else if(index === 2){
    const removeId = readlineSync.keyInSelect(listArray.data, "What todo do you want to remove? :")
    listArray.data.splice(removeId, 1)
    listArray.tasks.splice(removeId, 1)
    fs.writeFileSync("./list.json", JSON.stringify(listArray))
}




