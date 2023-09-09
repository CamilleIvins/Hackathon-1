import { AppState } from "../AppState.js"
import { Outing } from "../models/Outing.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class OutingsService {
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
}


export const outingsService = new OutingsService()