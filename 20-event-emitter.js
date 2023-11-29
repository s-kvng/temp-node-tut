const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//on and emit methods
//keep track of the order
//additional argument
//built-in modules utilize this

//SOME POINTERS TO NOTE
//1. the can be as many event listeners as you want to on event
//2. the order matters , first listen for the event before emitting

customEmitter.on("response", (name, id) => {
  console.log(`Data received by ${name} with ${id}`);
});

customEmitter.on("response", () => {
  console.log("some other another logic ");
});

customEmitter.emit("response", "John", 34);
