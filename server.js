import express from "express";
const app = express();

const PORT = 4000;

const handleHome = (req, res) => res.send("Home page ");

const handleProfile = (req, res) => res.send("Profile ");

const handleListening = () => {
  console.log(`server is listening at http://localhost:${PORT}`);
};

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
