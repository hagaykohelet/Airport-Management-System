export default class RegularTicket{
    constructor(price){
        this.ticketNumber = Math.floor(Math.random()*10000) 
        this.price = price
        this.ownerName = null
    }
    getOwnerName(passenger){
        this.ownerName = passenger.name
    }
}

