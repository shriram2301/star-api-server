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
      res.sendStatus(404);
    }
  } catch (e) {
    console.error("You messed up");
    res.send("You Messed UP");
  }
});
//loginRouter.put("/login/:id", (req, res) => {});

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

loginRouter.delete("/login/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const login = await Login.findOne({ where: { id: id } });
      if (login) {
        await login.destroy();
        res.send("deleted");
      } else {
        res.send("nothing to delete");
      }
    }
  } catch (e) {
    res.send(e);
  }
});

loginRouter.get("/login", async (req, res) => {
  try {
    const logins = await Login.findAll();
    res.send(logins);
  } catch (e) {
    res.send(e);
  }
});

module.exports = loginRouter;
