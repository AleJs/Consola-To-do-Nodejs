require('colors');

const Tasks = require('./models/tasks')

const { showMenu, pausa } = require('./helpers/message')
const { inquirerMenu, inquierPausa, readInput, listTaskDelete, confirm,listTaskComplete} = require('./helpers/inquirer');
const { saveDataDb, readDb } = require('./helpers/saveDb');
const Task = require('./models/task');
console.clear()
const main = async () => {
    let opt = ''
    // const taskdb = readDb
    // console.log(taskdb)
    const tasks = new Tasks
    const actuallyDb = readDb();

    if (actuallyDb) {
        tasks.uploadTask(actuallyDb)
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('description: ')
                tasks.createTask(desc)

                break;


            case '2':
                tasks.allList()
                break;
            case '3':
                tasks.listComplete(true)
                break;
            case '4':
                tasks.listComplete(false)
                break;
            case '5':
             const ids =  await listTaskComplete(tasks.listArr)
             tasks.toggleCompletadas(ids)
                break;
            case '6':

                const id = await listTaskDelete(tasks.listArr)

                const ok = await confirm("Are ur sure bro  ? ur give up ?".yellow)
                if (ok) {
                    tasks.deleteTask(id)
                    console.log(`Ur task was remove`.red)
                }
                break;
        }

        saveDataDb(tasks.listArr)
        await pausa()
    } while (opt !== '0');
}
main(); 
