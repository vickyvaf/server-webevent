const express = require("express");
const { createCMSOrganizer, createCMSUser, getCMSUsers } = require("./controller");
const router = express();
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.get(
  "/users",
  authenticateUser,
  authorizeRoles("owner"),
  getCMSUsers
);

router.post(
  "/organizers",
  authenticateUser,
  authorizeRoles("owner"),
  createCMSOrganizer
);

router.post(
  "/users",
  authenticateUser,
  authorizeRoles("organizer"),
  createCMSUser
);

module.exports = router;
