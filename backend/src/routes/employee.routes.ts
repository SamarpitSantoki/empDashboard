import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world!");
});

router.post("/", (req, res) => {
  res.send("Hello world!");
});

router.put("/", (req, res) => {
  res.send("Hello world!");
});

router.delete("/", (req, res) => {
  res.send("Hello world!");
});

router.post("/filter/location", (req, res) => {
  res.send("Hello world!");
});

router.get("/filter/name", (req, res) => {
  const order = req.query.order;

  res.send("Hello world!");
});

export default router;
