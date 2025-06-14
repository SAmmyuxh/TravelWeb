import e from "express";
import { getDestinations } from "../Controllers/Destinationcontroller.js";
const router = e.Router();

router.get("/",getDestinations );
export default router;