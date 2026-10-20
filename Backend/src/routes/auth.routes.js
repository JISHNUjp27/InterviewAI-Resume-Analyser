const express = require("express")
const { route, post } = require("../app")
const authRouter = express.Router()
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")
/** 
 @route POST /api/auth/register
 @description Register a new user
 @access Public
*/
authRouter.post("/register", authController.registerUserController)

/**
 @route Post/api/auth/logn
 @description login with username and password
 @access Public 
 */
authRouter.post("/login", authController.loginUserController)

/**
 @route GET/api/auth/logout
 @description clear token from user cookies and add token in blacklist 
 @access public
 */
authRouter.get("/logout", authController.logoutUserController)

/**
 @route GET/api/auth/get-me
 @description get the current user details
 @access private
 */
authRouter.get("/get-me",authMiddleware.authUser, authController.getMeController)

module.exports = authRouter