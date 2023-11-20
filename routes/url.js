const express = require("express");
const {
  generateNewShortURL,
  getAnalytics,
  redirectTotheURL,
} = require("../controllers/url");

const router = express.Router();

router.post("/", generateNewShortURL);
router.get("/analytics/:shortID", getAnalytics);
router.get("/:shortID", redirectTotheURL);

module.exports = router;
