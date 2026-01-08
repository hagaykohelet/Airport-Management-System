export default class Passenger {
    #amountOfMoney
    constructor(name, idNumber, amountOfMoney) {
        this.name = name
        this.idNumber = idNumber
        this.#amountOfMoney = amountOfMoney
    }
    validateProperties() {
        return true
    }

    
    buyTicket(price) {
        if (this.#amountOfMoney < price) {
            return false
        }
        return true
    }
    getAmount(){
        return this.#amountOfMoney
    }
}

