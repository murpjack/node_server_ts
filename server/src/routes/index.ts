import * as express from'express';
import controllers from "../controllers";

export const router = express.Router();

router.get("/user/getallusers", controllers);

export default router;
