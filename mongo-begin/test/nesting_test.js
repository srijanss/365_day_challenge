const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

// Describe out tests
describe("Nesting records", () => {
  beforeEach((done) => {
    mongoose.connection.collections.authors.drop(() => {
      done();
    });
  });

  // Create Tests
  it("Creates an author with sub-documents", (done) => {
    let pat = new Author({
      name: "Patrick Rothfuss",
      books: [{ title: "Name of the Wind", pages: 400 }],
    });

    pat.save().then(() => {
      Author.findOne({ name: "Patrick Rothfuss" }).then((result) => {
        assert(result.name === "Patrick Rothfuss");
        assert(result.books.length === 1);
        done();
      });
    });
  });

  it("Adds a book to an author", (done) => {
    let pat = new Author({
      name: "Patrick Rothfuss",
      books: [{ title: "Name of the Wind", pages: 400 }],
    });

    pat.save().then(() => {
      Author.findOne({ name: "Patrick Rothfuss" }).then((result) => {
        // add a book to the books array
        result.books.push({ title: `Wise Man's Feat`, pages: 500 });
        result.save().then(() => {
          Author.findOne({ name: "Patrick Rothfuss" }).then((result) => {
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
