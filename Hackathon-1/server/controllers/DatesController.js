import { datesService } from "../services/DatesService.js";
import BaseController from "../utils/BaseController.js";



export class DatesController extends BaseController {
    constructor() {
        super('api/dates')
        this.router
            .post('', this.createDate)
    }
    async createDate(req, res, next) {
        try {
            const body = req.body
            body.creatorId = req.userInfo.id
            const date = await datesService.createDate(body)
            res.send()
        } catch (error) {
            next(error)
        }
    }

}