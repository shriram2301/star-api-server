import Express from "express";

const app = Express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.info("App listening on PORT: ", PORT);
});
