import { AppState } from "../AppState.js"
import { Outing } from "../models/Outing.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class OutingsService {
    async leaveComment(outingId) {
        const res = await api.put(`api/outings`)
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
    setActive(outingId) {

        const foundOuting = AppState.outings.find(outing => outing.id == outingId)
        AppState.activeOuting = foundOuting
        logger.log(AppState.activeOuting)
    }

    async checkFavourite(outingId) {
        let foundOuting = AppState.outings.find(outing => outing.id == outingId)
        foundOuting.favourite = true
        const res = await api.put(`api/outings/${outingId}`, foundOuting)
        const updatedOuting = new Outing(res.data)
        let originalOutingIndex = AppState.outings.findIndex(outing => outing.id == outingId)
        AppState.outings.splice(originalOutingIndex, 1, updatedOuting)
        AppState.emit('outings')
    }


}


export const outingsService = new OutingsService()