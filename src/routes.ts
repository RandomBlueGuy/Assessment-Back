import { Application } from "express";

import healthcheck from "./api/healthcheck"
import users from "./api/users"
import Lists from "./api/lists"
import authLocal from "./auth/local"



const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use('/api/users', users);
  app.use('/auth/local', authLocal)
  app.use('/api/favs', Lists)
};

export default routes;
