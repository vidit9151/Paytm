const express = require("express");
const { Account, User } = require("../db");
const authMiddleware = require("../middleware");
const router = express.Router();
router.get("/balance", authMiddleware, async (req, res) => {
  //auth middleware will provide userId
  const account = await Account.findOne({ userId: req.userId });
  res.status(200).json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {});
module.exports = router;
