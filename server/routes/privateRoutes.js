import express from "express";
import {
  sendRequest,
  acceptRequest,
  getPendingRequests,
  getFriendsList,
} from "../controllers/friendController.js";
import { upsertUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/send-request", sendRequest);
router.post("/accept-request", acceptRequest);
router.get("/requests/:uid", getPendingRequests);
router.get("/friends/:uid", getFriendsList);
router.post("/user/upsert", upsertUser);

export default router;
