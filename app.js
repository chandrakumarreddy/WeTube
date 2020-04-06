import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import globalRouter from "./routers/globalRouter";
import videosRouter from "./routers/videosRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes.home, globalRouter);
app.use(routes.videos, videosRouter);
app.use(routes.users, userRouter);

export default app;
