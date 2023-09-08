import { AppState } from "../AppState.js"

import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class DatesService {
    async postDate(formData) {
        const res = await api.post('api/dates', formData)
        const newDate = new Date(res.data)
        AppState.dates.push(newDate)
        AppState.emit('dates')
        logger.log(newDate, AppState.dates)
    }

    async getDates() {
        const res = await api.get('api/dates')
        logger.log('got dates', res.data)
        AppState.dates = res.data.map(datePojo => new Date(datePojo))
    }
}


export const datesService = new DatesService()