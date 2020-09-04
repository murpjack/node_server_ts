import express from'express';
import controllers from "../controllers";

export const router = express.Router();

router.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
});

router.get("/user/getallusers", controllers);

export default router;
