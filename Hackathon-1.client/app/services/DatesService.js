import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class DatesService {

    async getDates() {
        const res = await api.get('api/dates')
        logger.log('got dates', res.data)
        // AppState.dates = res.data.map(datePojo => new Date(datePojo))
    }
}


export const datesService = new DatesService()