const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");

dotenv.config(); // Para cargar las variables del archivo .env

const app = express();

// Conectar a MongoDB
connectDB();

app.use(cors());
app.use(express.json()); // Necesario para procesar datos JSON

// Usar las rutas de autenticación
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Servidor corriendo en el puerto 5000");
});
