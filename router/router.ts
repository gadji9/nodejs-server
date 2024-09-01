import { Router } from "express";

import { usersController, imagesController } from "../controllers";

const router = Router();

router.get("/users", usersController.find);
router.get("/images", imagesController.getImage);

export { router };
