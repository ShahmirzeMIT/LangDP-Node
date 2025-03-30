require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Required for parsing JSON request bodies
app.use(express.urlencoded({ extended: true })); 

// Import routes
const loginRoutes = require("./ui-canvas/canvas-login_page/loginRoute");
const registerRoutes = require("./ui-canvas/canvas-register_page/registerRoute");
const services=require("./ui-canvas/canvas-services_page/servicesRoute")

// Use routes
app.use("/api/auth", loginRoutes);
app.use("/api/auth", registerRoutes);
app.use("/api/auth",services );

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
