const {v4: uuid}  = require('uuid')
class Task {
    id= ''
    desc= ''
    complete=null

    constructor(desc) {
        this.id= uuid()
        this.desc= desc;
        this.complete= null
    }
}

module.exports= Task;