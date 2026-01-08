import Ticket from "./ticket.js";


export default class VIPTicket extends Ticket{
    constructor(price){
        super (price)
        this.benefitsList = ["free alcohol", "free food", "hot towels"]
    }
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