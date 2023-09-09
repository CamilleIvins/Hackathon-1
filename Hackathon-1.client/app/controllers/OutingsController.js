import { AppState } from "../AppState.js"
import { outingsService } from "../services/OutingsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawOutings() {
    let template = ''
    AppState.outings.forEach(d => template += d.OutingTemplate)
    setHTML('outingHolder', template)
}
let likeCount = 0
function _likeCount() {
    likeCount++
}
function _dislikeCount() {
    likeCount--
}

export class OutingsController {
    constructor() {
        this.getOutings()
        console.log('Outings Controller')
        AppState.on('outings', _drawOutings)
    }

    async getOutings() {
        try {
            await outingsService.getOutings()
        } catch (error) {
            Pop.error(error)
        }
    }

    async postOuting() {

        window.event.preventDefault()
        const form = window.event?.target
        const formData = getFormData(form)
        console.log(formData);
        await outingsService.postOuting(formData)

    }

}