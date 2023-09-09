import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";


export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createComment)
            .get('/:outingId', this.getComments)
    }

    async createComment(req, res, next) {
        try {
            const body = req.body
            body.creatorId = req.userInfo.id
            const comment = await commentsService.createComment(body)
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async getComments(req, res, next) {
        try {
            const comments = await commentsService.getComments(req.params.outingId)
            res.send(comments)
        } catch (error) {
            next(error)
        }
    }
}