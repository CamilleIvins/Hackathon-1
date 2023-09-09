import { Account } from "./Account.js"
import { Outing } from "./Outing.js"

export class Favourite {

    constructor(data) {

        this.id = data.id
        this.outing = new Outing(data.outing)
        this.creator = new Account(data.creator)
    }
}