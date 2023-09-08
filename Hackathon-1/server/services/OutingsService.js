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
}

export const outingsService = new OutingsService()