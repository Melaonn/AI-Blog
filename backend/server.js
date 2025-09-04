import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blog.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/blog", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
