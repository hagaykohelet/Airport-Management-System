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
}

