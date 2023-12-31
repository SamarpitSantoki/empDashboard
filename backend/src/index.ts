import express from "express";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up routes
app.use(router);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
