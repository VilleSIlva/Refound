import { Router } from "express";
import { sessionsController } from "../controllers/sessions-controller";

const sessionRoute = Router();

sessionRoute.post("/login",sessionsController);

export {
    sessionRoute
}