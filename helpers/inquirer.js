const inquirer = require('inquirer');


const question = [
    {
        type: 'list',
        name: 'opt',
        message: `${'=='.blue} What u want to do tonigh ${'=='.blue}`,
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Create a task`
            },
            {
                value: '2',
                name: `${'2'.green}. Task list`
            },
            {
                value: '3',
                name: `${'3'.green}. Task list complete`
            },
            {
                value: '4',
                name: `${'4'.green}. Task list pendient`
            },
            {
                value: '5',
                name: `${'5'.green}. Complete task`
            },
            {
                value: '6',
                name: `${'6'.green}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'.green}. Salir`
            }
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('======================='.yellow);
    console.log(' === Welcome bro! ===='.white)
    console.log('======================='.yellow)

    const { opt } = await inquirer.prompt(question)
    return (opt)
}

const inquierPausa = async () => {
    const questionPausa = [
        {
            type: 'input',
            name: 'enter',
            message: ' Press Enter for continue'
        }
    ]

    await inquirer.prompt(questionPausa)

}


const readInput = async (message) => {
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return "wrote something now"
            }
            return true;
        }
    }



    const { desc } = await inquirer.prompt(question)

    return desc

}

const listTaskDelete = async (task = []) => {
    const choices = task.map((task, i) => {
        const idx = i + 1
        return {
            value: task.id,
            name: `${idx}. ${task.desc}`
        }
    });
    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
            
        }
    ]
    const { id } = await inquirer.prompt(question)
    

    return id
}
const listTaskComplete = async (task = []) => {
    const choices = task.map((task, i) => {
        const idx = i + 1
        return {
            value: task.id,
            name: `${idx}. ${task.desc}`,
            checked: (task.complete) ? true : false
        }
    });
    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
            
        }
    ]
    const { ids } = await inquirer.prompt(question)
    

    return ids
}

const confirm =async (message) =>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
           
            message
            
        }
    ]
    const { ok } = await inquirer.prompt(question)
    

    return ok
}
module.exports = {
    readInput, 
    inquirerMenu,
    inquierPausa,
    listTaskDelete,
    listTaskComplete,
    confirm

}