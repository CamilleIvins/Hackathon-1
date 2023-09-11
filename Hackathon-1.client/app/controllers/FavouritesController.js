import { AppState } from "../AppState.js"
import { favouritesService } from "../services/FavoritesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"







function _drawComments() {
    let template = ''
    AppState.comments.forEach(d => template += d.CommentTemplate)
    setHTML('commentHolder', template)
}

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