import express from "express";
import routes from "../routes";

const videosRouter = express.Router();

videosRouter.get(routes.home, (req, res) => res.send("videos"));
videosRouter.get(routes.upload, (req, res) => res.send("upload video"));
videosRouter.get(routes.videoDetail, (req, res) => res.send("videos detail"));
videosRouter.get(routes.editVideo, (req, res) => res.send("edit video"));
videosRouter.get(routes.deleteVideo, (req, res) => res.send("delete video"));

export default videosRouter;
