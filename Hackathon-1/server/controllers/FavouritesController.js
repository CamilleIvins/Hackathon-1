import { Auth0Provider } from "@bcwdev/auth0provider";
import { favouritesService } from "../services/FavouritesServices.js";
import BaseController from "../utils/BaseController.js";


export class FavouritesController extends BaseController {
    constructor() {
        super('api/favourites')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createFavourite)
            .get('', this.getFavouritesByOuting)
    }
    async createFavourite(req, res, next) {
        try {
            const body = req.body
            body.creatorId = req.userInfo.id
            const favourite = await favouritesService.createFavourite(body)
            res.send(favourite)
        } catch (error) {
            next(error)
        }

    }



    async getFavouritesByOuting(req, res, next) {
        try {
            const favourites = await favouritesService.getFavouritesByOuting(req)
            res.send(favourites)
        } catch (error) {
            next(error)
        }

    }
}