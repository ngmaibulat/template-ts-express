import { Router } from "express";
import {
    index,
    handleGetOne,
    handlePost,
    handlePut,
    handleDeleteOne,
} from "./controller.js";

const router = Router();

//get all
router.get("/", index);

//get one
router.get("/:id", handleGetOne);

//post -- add one
router.post("/", handlePost);

//put -- update
router.put("/:id", handlePut);

//delete
router.delete("/:id", handleDeleteOne);

export default router;
