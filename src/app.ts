import express from "express";
import cors from "cors"
import { errorHandler } from "./middleware/error-handler";
import { routes } from "./http/routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);

export {
    app
}