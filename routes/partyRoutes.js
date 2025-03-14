const router = require("express").Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const auth = require("../middleware/auth");
const Party = require("../models/party");
const User = require("../models/user");

const diskStorage = require("../helpers/fileStorage");
const upload = multer({ storage: diskStorage });
const getUserByToken = require("../helpers/userByToken");

router.get("/:id", auth, async (req, res) => {
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ error: "Token is required." });
    }
    const userId = getUserByToken(token);
    const id = req.params.id;
    const party = await Party.find({ _id: id });
    console.log(party);
    if (party.length === 0) {
      throw new Error("Party not exists.");
    } else if (!party.privacy) {
      res.status(200).json({ result: { party } });
    } else if (party.userId === userId.toString()) {
      res.status(200).json({ result: { party } });
    } else {
      throw new Error("Party private.");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post(
  "/",
  auth,
  upload.fields([{ name: "photos" }]),
  async (req, res) => {
    try {
      const { title, description, partyDate } = req.body;
      const privacy = req.body.privacy || false;
      let files = [];
      let photos = [];
      if (req.files) {
        files = req.files.photos;
      }
      if (!title) {
        throw new Error("Title cannot be null.");
      }
      if (!description) {
        throw new Error("Description cannot be null.");
      }
      //   if (!partyDate) {
      //     throw new Error("PartyDate cannot be null.");
      //   }

      const token = req.header("authorization");

      const user = await getUserByToken(token);
      if (files && files.length > 0) {
        files.forEach((photo, i) => {
          photos[i] = photo.path;
        });
      }
      const party = new Party({
        title,
        description,
        partyDate,
        photos,
        privacy,
        userId: user._id.toString(),
      });
      const newParty = party.save();
      if (!newParty) {
        throw new Error("Party not saved.");
      }
      res.status(200).json({ result: { party } });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);
router.get("/", auth, async (req, res) => {
  try {
    const parties = await Party.find({ privacy: false }).sort({ _id: -1 });
    res.status(200).json({
      result: {
        parties,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/byUser", auth, async (req, res) => {
  try {
    const user = await getUserByToken(req.header("authorization"));
    const userId = user._id;
    const parties = await Party.find({ userId }).sort({
      _id: -1,
    });
    res.status(200).json({
      result: {
        parties,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.put("/", auth, upload.fields([{ name: "photos" }]), async (req, res) => {
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ error: "Token is required." });
    }
    const user = await getUserByToken(token);
    const userIdToken = user._id;
    const { userId, description, partyDate, partyId, title, privacy } =
      req.body;
    if (!description || !title || !partyDate) {
      throw new Error(
        "The description, title and/or date fields cannot be null."
      );
    }
    let files = [];
    let photos = [];
    if (req.files) {
      files = req.files.photos;
    }
    if (userId !== userIdToken.toString()) {
      return res.status(401).json({
        error: "User does not have permission to change this party.",
      });
    }
    if (files && files.length > 0) {
      files.forEach((photo, i) => {
        photos[i] = photo.path;
      });
    }

    const party = await Party.findOneAndUpdate(
      { _id: party_id },
      { title, description, privacy, photos },
      { new: true }
    );
    res.status(200).json({ result: { party } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/:id", auth, async (req, res) => {
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ error: "Token is required." });
    }

    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "ID cannot be null." });
    }

    const user = await getUserByToken(token);
    if (!user) {
      return res.status(403).json({ error: "Invalid token." });
    }
    const party = await Party.findOneAndDelete({ _id: id, userId: user._id });

    if (!party) {
      return res.status(404).json({ error: "Party not found." });
    }

    res.status(202).json({ result: { party } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
