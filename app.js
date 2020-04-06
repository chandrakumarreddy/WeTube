import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";
import localsMiddleware from "./middlewares/localsMiddleware";

const app = express();

app.set("view engine", "pug");
app.use(logger("dev"));
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(localsMiddleware);

app.get("/favicon.ico", (req, res) => res.status(200));

app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);
app.use(routes.users, userRouter);

export default app;
