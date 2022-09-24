import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();
const serverPort = process.env.PORT || 8000;
const clientPort = process.env.CLIENT || 5173;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: `http://localhost:${clientPort}`,
    credentials: true,
  })
);

app.listen(serverPort, () => {
  console.log(`server up and running on: ${serverPort}`);
});
