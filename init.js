import app from "./app";

const PORT = 4000;

const handleListening = () => {
  console.log(`server is listening at http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
