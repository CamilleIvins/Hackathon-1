import { favouritesService } from "../services/FavoritesService.js"
import { Pop } from "../utils/Pop.js"


export class FavouritesController {
    constructor() {

    }

    async getFavourites() {
        try {
            await favouritesService.getFavourites()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createFavorite() {
        try {
            await favouritesService.createFavourite()
        } catch (error) {
            Pop.error(error)
        }
    }


}