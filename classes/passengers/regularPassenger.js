import Passenger from "./passenger.js"


export default class RegularPassenger extends Passenger {
    constructor(name, idNumber, amountOfMoney, workPlace) {
        super(name, idNumber, amountOfMoney)
        this.workPlace = workPlace
        this.knowsAnAirportEmployee = false
    }
    validateProperties() {
        const validate = { errors: {}, value: true }
        if (!this.name) {
            throw new Error("you need enter some value")
        }
        if (typeof this.name !== "string" || this.name.trim() === "") {
            validate.errors["name"] = "field name fail"
            validate.value = false
        }
        if (!this.idNumber || typeof this.idNumber !== "number") {
            validate.errors["idNumber"] = "field idNumber fail"
            validate.value = false
        }
        if (this.getAmount() === 0 || typeof this.getAmount() !== "number") {
            validate.errors["amountOfMoney"] = "field amountOfMoney fail"
            validate.value = false
        }
        if (!this.workPlace || typeof this.workPlace !== "string" || this.workPlace.trim() === "") {
            validate.errors["workPlace"] = "field workPlace fail"
            validate.value = false
        }
        if (!validate.value) {
            return validate
        }
        return "all fields ok"
    }

    changeStateAirportEmployee() {
        this.knowsAnAirportEmployee = true
    }

    getDiscount(ticket) {
        if (this.knowsAnAirportEmployee) {
            if (ticket instanceof VIPTticket) {
                return ticket.price *= 0.85
            }
            return ticket.price *= 0.80
        }
        return "no discount"
    }
}


