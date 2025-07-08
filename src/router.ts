import { Router } from "express";
import {
  borrarArriendo,
  crearArriendo,
  editarArriendo,
  getArriendos,
  getArriendosActivos,
  getArriendosTerminados,
  getTotalesPorTipoDeVehiculo,
} from "./handlers/arriendos";
import { CambiarContrasena, CerrarSesion, CrearUsuario, InicioSesion } from "./handlers/usuarios";

const router = Router();

//Arriendos
router.get("/arriendosActivos", getArriendosActivos);
router.get("/arriendosTerminados", getArriendosTerminados);
router.post("/crearArriendo", crearArriendo);
router.post("/editarArriendo/:id", editarArriendo);
router.delete("/borrarArriendo/:id", borrarArriendo);
router.get("/arriendos/totalesPorTipo", getTotalesPorTipoDeVehiculo);

//Usuarios
router.post("/crearUsuario", CrearUsuario);
router.post("/inicioSesion", InicioSesion);
router.post("/cerrarSesion", CerrarSesion);
router.put("/cambiarContrasena", CambiarContrasena);

export default router;
