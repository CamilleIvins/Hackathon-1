import { AppState } from "../AppState.js"
import { outingsService } from "../services/OutingsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { logger } from "../utils/Logger.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawOutings() {
    let template = ''
    AppState.outings.forEach(d => template += d.OutingTemplate)
    setHTML('outingHolder', template)
}


export class OutingsController {
    constructor() {
        this.getOutings()
        console.log('Outings Controller')
        AppState.on('outings', _drawOutings)


    }

    setActive(outingId) {
        console.log('edit outing', outingId)
        outingsService.setActive(outingId)
    }
    async getOutings() {
        try {
            await outingsService.getOutings()
        } catch (error) {
            Pop.error(error)
        }
    }

    async likeCount() {
        try {
            await outingsService.likeCount()
        } catch (error) {

        }
        logger.log()
    }

    async postOuting() {

        window.event.preventDefault()
        const form = window.event?.target
        const formData = getFormData(form)
        console.log(formData);
        await outingsService.postOuting(formData)
    }

    async deleteOuting(outingId) {
        try {
            console.log('deleting outing', outingId)
            if (await Pop.confirm('Are you sure you want to remove this Date?')) {
                outingsService.deleteOuting(outingId)
            }
        } catch (error) {
            Pop.error(error)
        }

    }


    async leaveComment(outingId) {
        try {
            await outingsService.leaveComment(outingId)
        } catch (error) {

        }

    }

    async checkFavourite(outingId) {
        try {
            await outingsService.checkFavourite(outingId)
            logger.log('checking favourite')
            _drawOutings()
        } catch (error) {
            Pop.error(error)
        }
    }

}