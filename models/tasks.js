const Task = require('./task')

class Tasks {
    _list = {}

    get listArr() {

        const list = [];

        Object.keys(this._list).forEach(key => {
            const task = this._list[key]
            list.push(task)
        })
        return list
    }

    deleteTask = (id = '') =>{

        delete this._list[id]

    }

    constructor() {
        this._list = {}

    }

    allList = () => {
        console.log("==================List====================".green)
        this.listArr.forEach((list, idx) => {
            const i = idx + 1;
            const state = (list.complete)
                ? 'complete'.yellow
                : 'in waiting..'.green
            console.log("------------------------------------------")
            console.log(`${i}. ${list.desc}     :: ${state}`)
        })
        console.log("\n")
    }

    toggleCompletadas (ids = []){
        ids.forEach(id => {
            const task = this._list[id]
            if (!task.complete){
                task.complete = new Date().toISOString()
            }
        })

        this.listArr.forEach(task => {
            if (!ids.includes(task.id)){
                this._list[task.id].complete = null
            }
        })
    }

    listComplete(complete = true) {
    

        let i = 0
        
        
        this.listArr.forEach((list) => {
            const state = (list.complete)
            ? 'complete'.yellow
            : 'in waiting..'.green
            
            if (complete) {

                if (list.complete) {
                    i += 1;
                    console.log(`${i}. ${list.desc}     ${'::'.green} ${state}`)
                }
            } else {

                if (!list.complete) {
                    i += 1;
                    console.log(`${i}. ${list.desc}     ${'::'.green} ${state}`)
                }
            }

        })
        console.log("\n")
    }
    uploadTask = (task = []) => {
        // console.log(task)
        task.forEach(task => {
            this._list[task.id] = task

        });
        // console.log(this._list)
    }


    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task
    }

    
}

module.exports = Tasks