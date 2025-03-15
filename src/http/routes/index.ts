import { Router } from "express";
import { userRoutes } from "./users-routes";
import { sessionRoute } from "./session-routes";

const routes = Router();

routes.use(userRoutes);
routes.use(sessionRoute);

export{
    routes,
}