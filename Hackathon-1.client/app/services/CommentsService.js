import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class CommentsService {
    async getComments() {
        const res = await api.get('api/comments')
        console.log(res.data, 'Getting Comments')
        const mappedComments = res.data.map(dataObj => new Comment(dataObj))
        AppState.comments = mappedComments
    }


    async createComments(formData) {
        const res = await api.post('api/comments', formData)
        logger.log(res.data, 'Creating new Comment')
        const newComment = new Comment(res.data)
        console.log(AppState.comments)
        AppState.comments.push(newComment)
        AppState.emit('comments')
    }


}

export const commentsService = new CommentsService