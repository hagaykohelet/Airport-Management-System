import RegularTicket from "./ticket.js";


export default class VIPTicket extends RegularTicket{
    constructor(price){
        super (price)
        this.benefitsList = ["free alcohol", "free food", "hot towels"]
    }
}