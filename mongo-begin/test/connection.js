const mongoose = require("mongoose");

// Connect to the db before tests run
before((done) => {
  // Connect to mongodb
  mongoose.connect("mongodb://localhost/testaroo");

  mongoose.connection
    .once("open", () => {
      console.log("Connection has been made.");
      done();
    })
    .on("error", (error) => {
      console.log(`Connection error: ${error}`);
    });
});

// Drop the characters collection before each test
beforeEach((done) => {
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  });
});
