console.log( 'js' );
//road trip planner
let seatsInCar = 7;
let passengers = 6;
let infants = 1;
let infantSeats = 1;
let fullTankOfGas = true;

//Check that there is enough room
if( seatsInCar >= passengers && infantSeats >= infants ){
    console.log( 'Ready for the road trip. Hallelujah!' );
    //Check if you have enough gas to start the trip, we want a full tank.
    if( fullTankOfGas ){
        console.log( 'Ready to hit the highway, lets go!' );
    } //end, we have a full tank
    else{
        console.log( 'Go get gas first.' );
    }
} // end, we have enough seats.
else{
    console.log( 'Not ready yet. Check the car, the passengers and the equipment.' )
} //end. we do not have enough seats
