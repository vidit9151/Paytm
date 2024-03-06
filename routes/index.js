const express = require("express");
const userRouter = require("./user");
const accountsRouter = require("./account");
const router = express.Router();
router.use("/user", userRouter); //here it mean like we did in the main server index.js we used app.use to route all the api/vi here now if api/v1/user is it then it will be handled in new route
router.use("/account", accountsRouter);
module.exports = router;
