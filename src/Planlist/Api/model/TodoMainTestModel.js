export default class TodoMainTestModel{
    constructor(todoObj){
        this.imgUrl=todoObj.imgUrl
        this.name=todoObj.name
        this.title=todoObj.title
        this.description=todoObj.description
        this.writer=todoObj.writer
        this.rating=todoObj.rating
        this.startTime=todoObj.start_time
        this.endTime=todoObj.end_time
    }
}