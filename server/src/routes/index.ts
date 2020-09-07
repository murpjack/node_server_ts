import express from'express';
import { getAllUsers } from "../controllers";

export const router = express.Router();

// This is a test route!!
// router.get('/test', async (req, res) => {
//   res.json({message: 'pass!'})
// });

router.get("/user/getallusers", getAllUsers);
// router.post("/user/addsingleuser", controllers);
// router.put("/user/updatesingleuser", controllers);
// router.delete("/user/removesingleuser", controllers);

export default router;
