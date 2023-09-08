import { datesService } from "../services/DatesService.js"
import { Pop } from "../utils/Pop.js"

Pop

export class DatesController {
    constructor() {

        console.log('dates Controller')
    }

    async getDates() {
        try {
            await datesService.getDates()
        } catch (error) {
            Pop.error(error)
        }
    }
}