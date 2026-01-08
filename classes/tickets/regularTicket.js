import Ticket from "./ticket.js";


export default class RegularTicket extends Ticket {
    validateProperties() {
        let validate = true 
        if (!this.price) {
            throw new Error("you need enter some value")
        }
        if (typeof this.price !== "number") {
            validate = false
        }
        return validate
    }
}




