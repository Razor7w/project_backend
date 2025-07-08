import { Router } from "express";
import {
  borrarArriendo,
  crearArriendo,
  editarArriendo,
  getArriendos,
  getArriendosActivos,
  getArriendosTerminados,
} from "./handlers/arriendos";
import { login, logout, password, usuario } from "./handlers/usuarios";

const router = Router();

//Arriendos
router.get("/arriendos", getArriendos);
router.get("/arriendosActivos", getArriendosActivos);
router.get("/arriendosTerminados", getArriendosTerminados);
router.post("/crearArriendos", crearArriendo);
router.post("/editarArriendo/:id", editarArriendo);
router.delete("/borrarArriendo/:id", borrarArriendo);

//Usuarios
router.post("/usuario", usuario);
router.post("/login", login);
router.post("/logout", logout);
router.put("/usuario/password", password);

export default router;
