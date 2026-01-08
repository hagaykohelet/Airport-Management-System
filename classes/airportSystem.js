import Flight from "./flight.js";


export default class Airport{
    #allFlights
    constructor(){
        this.#allFlights = []
    }
    addFlight(flight){
        this.#allFlights.push(flight)
    }
    createFlights(){
        this.addFlight(new Flight("el-al","TLV - USA",111,10,120,200))
        this.addFlight(new Flight ("arkia", "USA - TLV", 222,300,100,300))
        this.addFlight(new Flight("WIZZ", "TLV - MON", 999, 100, 400,1000))
    }
    addTickets(){
        for (let flight of this.#allFlights){
            flight.createTicket()
        }
    }
    buyTicket(flightNumber, ticketType, passenger){
        this.#allFlights.forEach(flight => {
            if (flight.flightNumber === flightNumber){
                for (let ticket of flight.ticketsList){
                    if(!ticket.ownername && ticket instanceof ticketType){
                        passenger.buyTicket(ticket.price)
                        ticket.getOwnerName(passenger)
                    }
                    return "not enough tickets"
                }
            }
        });
    }
}

