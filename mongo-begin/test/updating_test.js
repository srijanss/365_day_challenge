const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests
describe("Updating records", () => {
  let char;
  beforeEach((done) => {
    char = new MarioChar({
      name: "Mario",
      weight: 50,
    });

    char.save().then(() => {
      done();
    });
  });

  // Findoneandupdate one test
  // char.update()
  // MarioChar.update()
  // MarioChar.findOneAndUpdate()
  it("Update one record from the database", (done) => {
    MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" }).then(
      () => {
        MarioChar.findOne({ _id: char._id }).then((result) => {
          assert(result.name === "Luigi");
          done();
        });
      }
    );
  });

  it("Update the weigth by 1 in the database", (done) => {
    MarioChar.update({}, { $inc: { weight: 1 } }).then(() => {
      MarioChar.findOne({ name: "Mario" }).then((result) => {
        assert(result.weight === 51);
        done();
      });
    });
  });
});
