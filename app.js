import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");
app.use(logger("dev"));
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/favicon.ico", (req, res) => res.status(200));

app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);
app.use(routes.users, userRouter);

export default app;
