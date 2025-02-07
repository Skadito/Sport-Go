const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Conexion a MongoDB sin opciones obsoletas
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB", err);
  }
};

module.exports = connectDB;
