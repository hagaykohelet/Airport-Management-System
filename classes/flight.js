import VIPTicket from "./tickets/vipTicket.js"
import RegularTicket from "./tickets/ticket.js"
export default class Flight {
    constructor(flightName, airline, flightNumber, maximumNumberOfPassenger, regularTicketPrice, VIPTicketPrice) {
        this.flightName = flightName
        this.airline = airline
        this.flightNumber = flightNumber
        this.maximumNumberOfPassenger = maximumNumberOfPassenger
        this.regularTicketPrice = regularTicketPrice
        this.VIPTicketPrice = VIPTicketPrice
        this.ticketsList = []
    }
    validateFlight() {
        const validate = { errors: {}, value: true }
        if (!this.flightName) {
            throw new Error("you need enter some value to create instance")
        }
        if (typeof this.flightName !== "string" || this.flightName.trim() ==="") {
            validate.errors["flightname"] = "fields flightname fail"
            validate.value = false
        }
        if (!this.airline || typeof this.airline !== "string" || this.airline.trim()==="") {
            validate.errors["airline"] = "fields airline fail"
            validate.value = false
        }
        if (!this.flightNumber || typeof this.flightName !== "number") {
            validate.errors["flightName"] = "fields flightName fail"
            validate.value = false
        }
        if (!this.maximumNumberOfPassenger || typeof this.maximumNumberOfPassenger !== "number") {
            validate.errors["maximumNumberOfPassenger"] = "fields maximumNumberOfPassenger fail"
            validate.value = false
        }
        if (!this.regularTicketPrice || typeof this.regularTicketPrice !== "number") {
            validate.errors["regularTicketPrice"] = "fields regularTicketPrice fail"
            validate.value = false
        }
        if (!this.VIPTicketPrice || typeof this.VIPTicketPrice !== "number") {
            validate.errors["VIPTicketPrice"] = "fields VIPTicketPrice fail"
            validate.value = false
        }
        if (!validate.value) {
            return validate
        }
        return "all fields ok"
    }

    createTicket(){
        for (let ticket = 0; ticket < Math.floor((this.maximumNumberOfPassenger * 0.9));ticket++){
            this.ticketsList.push(new RegularTicket(this.regularTicketPrice))
        }
        this.maximumNumberOfPassenger -= Math.floor((this.maximumNumberOfPassenger * 0.9))
        for(let vipticket = 0 ; vipticket < this.maximumNumberOfPassenger ; vipticket++){
            this.ticketsList.push(new VIPTicket(this.VIPTicketPrice))
        }
    }
}

