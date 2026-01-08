import Passenger from "./passenger.js";


export default class StudentPassenger extends Passenger {
    constructor(name, idNumber, amountOfMoney, schoolName) {
        super(name, idNumber, amountOfMoney)
        this.schoolName = schoolName
    }
    validateProperties() {
        const validate = { errors: {}, value: true }
        if (!this.name) {
            throw new Error("you need enter some value")
        }
        if (typeof this.name !== "string" || this.name.trim()=== "") {
            validate.errors["name"] = "field name fail"
            validate.value = false
        }
        if (!this.idNumber || typeof this.idNumber !== "number" ) {
            validate.errors["idNumber"] = "field idNumber fail"
            validate.value = false
        }
        if (this.getAmount() === 0 || typeof this.getAmount() !== "number") {
            validate.errors["amountOfMoney"] = "field amountOfMoney fail"
            validate.value = false
        }
        if (!this.schoolName || typeof this.schoolName !== "string" || this.schoolName.trim()=== "") {
            validate.errors["schoolName"] = "field schoolName fail"
            validate.value = false
        }
        if (!validate.value) {
            return validate
        }
        return "all fields ok"

    }
    getDiscount(ticket) {
        if (ticket instanceof VIPTticket) {
            return "for this ticket doesnt have discount"
        }
        return ticket.price *= 0.90

    }
}