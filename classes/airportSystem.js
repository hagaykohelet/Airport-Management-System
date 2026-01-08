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
        const flight1 = new Flight("el-al","TLV - USA",111,10,120,200)
        const flight2 =new Flight ("arkia", "USA - TLV", 222,300,100,300)
        const flight3 = new Flight("WIZZ", "TLV - MON", 999, 100, 400,1000)
        if(flight1.validateFlight().validate.value){
            this.addFlight(flight1)
        }
        else{
            return flight1.validateFlight()
        }
        if(flight2.validateFlight().validate.value){
            this.addFlight(flight2)
        }
        else{
            return flight2.validateFlight()
        }
        if(flight3.validateFlight().validate.value){
            this.addFlight(flight3)
        }
         else{
            return flight2.validateFlight()
        }
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

