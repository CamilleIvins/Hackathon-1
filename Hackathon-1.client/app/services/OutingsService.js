import { AppState } from "../AppState.js"
import { Favourite } from "../models/Favourite.js"
import { Outing } from "../models/Outing.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class OutingsService {
    async leaveComment(outingId) {
        const res = await api.put(`api/comments`)
        const updatedOuting = new Outing(res.data)
        let originalOuting = AppState.outings.findIndex(outing => outing.id == outingId)
        logger.log(originalOuting, "comment")
        logger.log(updatedOuting, "outing")
    }
    async likeCount() {

    }

    async postOuting(formData) {
        const res = await api.post('api/outings', formData)
        const newOuting = new Outing(res.data)
        AppState.outings.push(newOuting)
        AppState.emit('outings')
        logger.log(newOuting, AppState.outings)
    }



    async getOutings() {
        const res = await api.get('api/outings')
        logger.log('got outings', res.data)
        const mappedOutings = res.data.map(datePojo => new Outing(datePojo))
        AppState.outings = mappedOutings
    }

    async deleteOuting(outingId) {
        const res = await api.delete(`api/outings/${outingId}`)
        logger.log('deleting outing', res.data)
        const filteredArr = AppState.outings.filter(outing => outing.id != outingId)
        AppState.outings = filteredArr
    }

    setActive(outingId) {

        const foundOuting = AppState.outings.find(outing => outing.id == outingId)
        AppState.activeOuting = foundOuting
        logger.log(AppState.activeOuting)
    }

    async checkFavourite(thisId) {
        let outingId = { outingId: thisId }
        let foundOuting = AppState.outings.find(outing => outing.id == outingId.outingId)
        foundOuting.favourite = true
        const res = await api.post(`api/favourites`, outingId)

        const updatedOuting = new Outing(res.data.outing)
        logger.log(updatedOuting, 'updated outing')
        let originalOutingIndex = AppState.outings.findIndex(outing => outing.id == outingId)
        AppState.outings.splice(originalOutingIndex, 1, updatedOuting)
        AppState.emit('outings')
    }


}


export const outingsService = new OutingsService()