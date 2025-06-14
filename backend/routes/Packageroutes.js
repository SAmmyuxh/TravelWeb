import e from "express";
import { getTopSellingPackages } from "../Controllers/Packagecontroller.js";

const router = e.Router();

router.get("/top-selling",getTopSellingPackages) 

export default router;