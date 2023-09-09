import { AppState } from "../AppState.js"
import { commentsService } from "../services/CommentsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { logger } from "../utils/Logger.js"
import { Pop } from "../utils/Pop.js"



function _wait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}


export class CommentsController {
    constructor() {
        console.log('comments Controller')
        //this.getComment()
    }

    async getComment() {
        try {
            await _wait()
            await commentsService.getComments()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createComment() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await commentsService.createComments(formData)
            logger.log('making new comment')
        } catch (error) {
            Pop.error(error)
        }
    }

}

