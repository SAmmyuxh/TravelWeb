import e from "express";
import dotenv from "dotenv";
import connectDB from "./Db/db.js";
import DestinationRoutes from "./routes/Destinationroutes.js";
import PackageRoutes from "./routes/Packageroutes.js";
dotenv.config();
import cors from "cors";

const app =e();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(cors());
app.use(e.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Travel Agency API');
});
app.use('/api/destinations',DestinationRoutes)
app.use('/api/packages',PackageRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});