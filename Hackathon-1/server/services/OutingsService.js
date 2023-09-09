import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class OutingsService {
    async createOuting(OutingData) {
        const newOuting = await dbContext.Outing.create(OutingData)
        await newOuting.populate('creator')
        return newOuting
    }

    async getOutings(query) {
        const Outings = await dbContext.Outing.find(query)
        return Outings
    }

    async getOutingsByCreator(creatorId) {
        const creatorOutings = await dbContext.Outing.find({ creatorId })
        return creatorOutings
    }
    async editOuting(outingId, updates) {
        const originalOuting = await dbContext.Outing.findById(outingId)
        if (!originalOuting) throw new BadRequest
        originalOuting.voteCount = updates.voteCount
        await originalOuting.save()
        return originalOuting
    }
}

export const outingsService = new OutingsService()