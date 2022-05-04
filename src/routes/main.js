// CONSTANTES

const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
const guestMiddlware = require("../middlewares/guestMiddlware")
const validator = require("../middlewares/express-validator")
const logUserMiddlware = require("../middlewares/userLogs")
//const uploadFileEstudiantes = require('../middlewares/multer/multerRegisterEstudiantes');
//const uploadFileProfesores = require('../middlewares/multer/multerRegisterProfesores');
//const adminMiddlware = require('../middlewares/adminMiddleware');

// RUTAS 

// INICIO DE INVITADOS 
router.get("/", guestMiddlware, mainController.home)

// CREAR USUARIO EN EL INICIO DE INVITADOS 
router.post("/", validator.register, mainController.createUserCarusel)

// ESCRIBIR UN COMENTARIO EN EL INICIO DE INVITADOS 
router.post("/comment", mainController.createComment)

// INICIO DE SESION Y SUS VALIDACIONES
router.get("/login", guestMiddlware, mainController.login)
router.post("/login", logUserMiddlware, validator.login, mainController.userValidation)

// REGISTRO Y SUS VALIDACIONES
router.get("/register", guestMiddlware, mainController.register)
router.post("/register", validator.register, mainController.createUser)

// EXPORTAR EL MODULO 

module.exports = router
