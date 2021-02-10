import express from "express";
import Login from "../../models/login/login";
const loginRouter = express.Router();

loginRouter.post("/login/auth", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const login = await Login.findOne({
      where: { username: username, password: password },
    });
    if (login) {
      res.send(login.toJSON());
    } else {
      throw Error("You Messed Up");
    }
  } catch (e) {
    console.error("You messed up");
    res.send("You Messed UP");
  }
});
loginRouter.put("/login/:id", (req, res) => {});

loginRouter.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    if (req.body) {
      const login = new Login(req.body);
      await login.save();
      res.send(login.toJSON());
    } else {
      res.send({ message: "something missing" });
    }
  } catch (e) {
    res.send(e.message);
  }
});

loginRouter.get("/login/:id", (req, res) => {});

loginRouter.get("/login", (req, res) => {});

module.exports = loginRouter;
