import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { outingsService } from "../services/OutingsService.js";



export class OutingsController extends BaseController {
    constructor() {
        super('api/outings')
        this.router
            .get('', this.getOutings)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('/:creatorId', this.getOutingsByCreator)
            // .get('', this.)
            .post('', this.createOuting)
            .put('/:outingId', this.editOuting)
    }
    async createOuting(req, res, next) {
        try {
            const body = req.body
            body.creatorId = req.userInfo.id
            const outing = await outingsService.createOuting(body)
            res.send(outing)
        } catch (error) {
            next(error)
        }
    }

    async getOutings(req, res, next) {
        try {
            const outings = await outingsService.getOutings(req.query)
            res.send(outings)
        } catch (error) {
            next(error)
        }
    }

    async getOutingsByCreator(req, res, next) {
        try {
            const creatorOutings = await outingsService.getOutingsByCreator(req.params.creatorId)
            res.send(creatorOutings)
        } catch (error) {
            next(error)
        }
    }

    async editOuting(req, res, next) {
        try {
            const updates = req.body
            const outingId = req.params.outingId
            const updatedOuting = await outingsService.editOuting(outingId, updates)
            res.send(updatedOuting)
        } catch (error) {
            next(error)
        }
    }
}