import express from "express";
let router = express.Router();

import usersRouter from "./users.js";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Stock API",
    subtitle: "Endpoints of Stock",
  });
});

router.use("/users", usersRouter);

export default router;
