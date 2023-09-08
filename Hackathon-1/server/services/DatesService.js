import { dbContext } from "../db/DbContext.js"


class DatesService {
    async createDate(dateData) {
        const newDate = await dbContext.Date.create(dateData)
        await newDate.populate('creator')
        return newDate
    }

    getDates(query) {
        const dates = dbContext.Date.find(query)
        return dates
    }
}

export const datesService = new DatesService()