import { Auth0Provider } from "@bcwdev/auth0provider";
import { datesService } from "../services/DatesService.js";
import BaseController from "../utils/BaseController.js";



export class DatesController extends BaseController {
    constructor() {
        super('api/dates')
        this.router
            .get('', this.getDates)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createDate)
    }
    async createDate(req, res, next) {
        try {
            const body = req.body
            body.creatorId = req.userInfo.id
            const date = await datesService.createDate(body)
            res.send(date)
        } catch (error) {
            next(error)
        }
    }

    async getDates(req, res, next) {
        try {
            const dates = await datesService.getDates(req.query)
            res.send(dates)
        } catch (error) {
            next(error)
        }
    }
}