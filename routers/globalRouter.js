import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("home route"));
globalRouter.get(routes.join, (req, res) => res.send("join route"));
globalRouter.get(routes.login, (req, res) => res.send("login route"));
globalRouter.get(routes.logout, (req, res) => res.send("logout route"));
globalRouter.get(routes.search, (req, res) => res.send("search route"));

export default globalRouter;
