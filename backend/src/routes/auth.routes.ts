import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  res.send("Hello world!");
});

router.post("/register", (req, res) => {
  res.send("Hello world!");
});

export default router;
