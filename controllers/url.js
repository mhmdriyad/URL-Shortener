const shortid = require("shortid");
const URL = require("../models/url");
async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const shortID = shortid();
  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}

async function getAnalytics(req, res) {
  const shortID = req.params.shortID;
  const result = await URL.findOne({ shortID });

  return res.json({ totalClicks: result.visitHistory.length });
}

async function redirectTotheURL(req, res) {
  const shortID = req.params.shortID;
  const entry = await URL.findOneAndUpdate(
    { shortID },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectURL);
}

module.exports = {
  generateNewShortURL,
  getAnalytics,
  redirectTotheURL,
};
