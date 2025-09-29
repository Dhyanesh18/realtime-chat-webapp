import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use("/api/auth", authRoutes);

app.listen(8080, () => {
    console.log("Server is running on http:/localhost:8080")
})