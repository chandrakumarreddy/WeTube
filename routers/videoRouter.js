import express from "express";
import routes from "../routes";
import {
  videos,
  videoDetail,
  upload,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get(routes.home, videos);
videosRouter.get(routes.upload, upload);
videosRouter.get(routes.videoDetail, videoDetail);
videosRouter.get(routes.editVideo, editVideo);
videosRouter.get(routes.deleteVideo, deleteVideo);

export default videosRouter;
