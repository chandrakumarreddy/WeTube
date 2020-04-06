export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", name: "Tanmai" });
export const search = (req, res) => {
  const { term: searchingBy } = req.query;
  res.render("search", { pageTitle: "Search", searchingBy });
};
export const videos = (req, res) => res.send("videos", { pageTitle: "videos" });
export const upload = (req, res) => res.send("upload", { pageTitle: "upload" });
export const videoDetail = (req, res) =>
  res.send("video detail", { pageTitle: "video detail" });
export const editVideo = (req, res) =>
  res.send("edit video", { pageTitle: "Edit video" });
export const deleteVideo = (req, res) =>
  res.send("delete", { pageTitle: "delete video" });
