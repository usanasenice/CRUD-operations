import express from "express"
import {fetch,create,update,deleteUser} from "../controller/userController.js"
import { unstable_batchedUpdates } from "react-dom";

const route=express.Router();
route.post("/create",create);
route.get("/getAllUsers",fetch)
route.put("/update/id",update)
route.put("/delete/:id",deleteUser)

export default route;