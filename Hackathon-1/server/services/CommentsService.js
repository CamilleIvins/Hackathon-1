import { dbContext } from "../db/DbContext.js"


class CommentsService {
    async createComment(body) {
        const comment = await dbContext.Comment.create(body)
        await comment.populate('creator outing')
        return comment
    }

    async getComments(outingId) {
        const comments = await dbContext.Comment.find({ outingId }).populate('creator outing')
        return comments
    }
}

export const commentsService = new CommentsService()