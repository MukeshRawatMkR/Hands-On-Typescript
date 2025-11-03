//enum -> in JS it's a IIFE which is internally mapped to intgers like array index.
//set of constants which are not going to change.
enum TicketStatus{
    INITIALISED,
    CANCELLED,
    PENDING,
    CLOSED
}
const Ticket={
    id:1,
    titile:"New Ticker",
    status:TicketStatus.INITIALISED
}

if(Ticket.status==TicketStatus.INITIALISED){
    console.log("Done");
}


//if we don't wanna map them like array indexes:
enum StatusCode{
    NotFound=404,//or string.
    Success=200,
    Created=201,
    BadRequest=400
}
const response={
    //something
    status:StatusCode.Success
    //something
}
console.log(response.status);


//we can give 'string' as well.