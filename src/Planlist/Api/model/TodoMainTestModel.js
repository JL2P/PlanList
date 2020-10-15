export default class TodoMainTestModel{
    constructor(todoObj){
        this.imgUrl=todoObj.imgUrl
        this.name=todoObj.name
        this.title=todoObj.title
        this.description=todoObj.description
        this.writer=todoObj.writer
        this.rating=todoObj.rating
        this.start_time=todoObj.start_time
        this.end_time=todoObj.end_time
    }
}