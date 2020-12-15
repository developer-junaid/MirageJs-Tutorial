import { Server } from "miragejs";
import books from "./json/books.json";

export const makeServer = () => {
  // Create new server
  let server = new Server({
    // Routes
    routes() {
      this.namespace = "api";
      // Get API
      this.get("/books", (schema) => {
        return books;
      });

      // Post API
      this.post("/add", (schema, request) => {
        console.log(request);
        // Get Data and parse it
        const newBook = JSON.parse(request.requestBody);
        // Push Data into our database (fake)
        books.push(newBook);
      });
    },
  });

  return server;
};
