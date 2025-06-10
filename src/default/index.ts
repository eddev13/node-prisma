import { Request, Response } from "express";
import { createUser } from "../services/user";

export const createUserHandler = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await createUser({ name, email });

  if (user) {
    res.status(201).json({ user });
  } else {
    res.status(500).json({ error: "Aconteceu algo!" });
  }
};
