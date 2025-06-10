import { Router } from "express";
import { createUserHandler } from "../default";

export const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});

mainRouter.get("/test", (req, res) => {
  res.json({
    testado: true,
  });
});

mainRouter.post("/user", createUserHandler);

// import { createUser } from "../services/user";

// mainRouter.post("/user", async (req, res) => {
//   const { name, email } = req.body;
//   const user = await createUser(name, email);

//   if (user) {
//     res.status(201).json({ user });
//   } else {
//     res.status(500).json({ error: "Aconteceu algo!" });
//   }
// });
