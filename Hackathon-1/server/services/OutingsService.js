import { dbContext } from "../db/DbContext.js"


class OutingsService {
    async createOuting(OutingData) {
        const newOuting = await dbContext.Outing.create(OutingData)
        await newOuting.populate('creator')
        return newOuting
    }

    getOutings(query) {
        const Outings = dbContext.Outing.find(query)
        return Outings
    }

    getOutingsByCreator(creatorId) {
        const creatorOutings = dbContext.Outing.find({ creatorId })
        return creatorOutings
    }
}

export const outingsService = new OutingsService()