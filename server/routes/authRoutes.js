const express = require("express");
const { body, validationResult } = require("express-validator");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

// Ruta para el registro de usuario
router.post(
  "/register",
  // Validación de los campos
  body("name", "El nombre es obligatorio").not().isEmpty(),
  body("email", "Por favor, ingresa un correo válido").isEmail(),
  body("password", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6 }),

  // Usar el controlador de registro
  registerUser
);

// Login de usuario
router.post("/login", loginUser);

module.exports = router;
