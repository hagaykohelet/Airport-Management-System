import RegularPassenger from "./classes/passengers/regularPassenger.js";
import StudentPassenger from "./classes/passengers/studentPassenger.js";
import Airport from "./classes/airportSystem.js";

const airport = new Airport()
airport.createFlights()
airport.addTickets()

const studentPassenger = new StudentPassenger("hagay",12345,10000,"kodkod")
const regularPassenger = new RegularPassenger("joni",98765,5000,"IDF")





