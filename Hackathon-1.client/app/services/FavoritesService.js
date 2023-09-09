import { AppState } from "../AppState.js"
import { Favourite } from "../models/Favourite.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class FavouritesService {
    async createFavourite() {
        const favouriteData = { OutingId: AppState.activeOuting.id }
        const res = await api.post('api/favourites', favouriteData)
        logger.log('created favourite', res.data)
        AppState.favourites.push(new Favourite(res.data))
        AppState.emit('favourites')
    }
    async getFavourites() {
        const outingId = AppState.activeOuting.id
        const res = await api.get(`api/outings/${outingId}/favourites`)
        logger.log('Got favourites', res.data)
        AppState.favourites = res.data.map(fvPojo => new Favourite(fvPojo))
    }



}

export const favouritesService = new FavouritesService