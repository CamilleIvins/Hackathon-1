import { AppState } from "../AppState.js"
import { datesService } from "../services/DatesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawDates() {
    let template = ''
    AppState.dates.forEach(d => template += d.datesTemplate)
    setHTML('dateHolder', template)
}


export class DatesController {
    constructor() {
        AppState.on('dates', _drawDates)
        this.getDates
        console.log('dates Controller')
    }

    async getDates() {
        try {
            await datesService.getDates()
        } catch (error) {
            Pop.error(error)
        }
    }

    async postDate() {
        window.event.preventDefault()
        const form = window.event?.target
        const formData = getFormData(form)
        console.log(formData);
        await datesService.postDate(formData)

    }

}