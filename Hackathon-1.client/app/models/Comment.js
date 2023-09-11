import { AppState } from "../AppState"
import { setHTML } from "../utils/Writer"






export class Comment {
    constructor(data) {
        this.id = data.id
        this.outingId = data.outingId
        this.creatorId = data.creatorId
        this.comment = data.comment
        this.checkboxState = data.favourite ? 'checked' : ''
    }

    get CommentTemplate() {
        return `
    

    
    `
    }
}