require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path"); 

const PORT = process.env.PORT || 5173;
const app = express();

const server = new ApolloServer({
});

async function startApolloServer() {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
  });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port http://localhost:${PORT}`);
    });
  });
}

startApolloServer();
