const events = require("events");

const eventEmitter = new events.EventEmitter();

// creating an event handler

const eTestKorbo = () => {
  console.log("event test korchi");
};

// assign the handler into an event

eventEmitter.on("test", eTestKorbo);

// firing the event

eventEmitter.emit("test");
