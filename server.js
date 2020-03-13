const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const dotenv = require("dotenv");
const morgan = require("morgan");
const history = require("connect-history-api-fallback");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const logs = require("./utils/logs");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
require("./config/db");

// Route files
const users = require("./routes/users");
const timers = require("./routes/timers");

// Express app and socket
const app = express();

// Cookie parser
app.use(cookieParser());

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

// Set security headers
app.use(helmet());

// Prevent XSS attacks
// app.use(xss());

// Enable CORS
app.use(cors());

// Mount routers
app.use("/api/v1/users", users);
app.use("/api/v1/timers", timers);

// History mode for React Router
app.use(history());

// Serve Static React
app.use(express.static("./frontend/build"));

// Custom error handler
app.use(errorHandler);

// Start server
app.listen(process.env.PORT, () => {
  logs.info(`Server running on port ${process.env.PORT}`);
});

// Handle unhandled promise rejections
// process.on("unhandledRejection", (error, promise) => {
//   logs.error(`Error: ${error.message}`);
//   // Close server & exit process
//   app.close(() => process.exit(1));
// });
