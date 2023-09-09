import { dbContext } from "../db/DbContext.js"


class FavouritesService {
    async getFavouritesByOuting(req) {
        const favourites = await dbContext.Favourite.find(req)
        return favourites
    }
    async createFavourite(favData) {
        const favourite = await dbContext.Favourite.create(favData)
        await favourite.populate('creator outing')
        return favourite
    }

    async getFavouritesByCreator(creatorId) {
        const favourites = await dbContext.Favourite.find({ creatorId }).populate('creator outing')
        return favourites
    }
}

export const favouritesService = new FavouritesService()