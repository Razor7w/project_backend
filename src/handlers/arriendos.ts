import { Request, Response } from "express";
import Arriendo from "../models/Arriendo";
import { Sequelize } from "sequelize";

//Mostrar todos los arriendos
export const getArriendos = async (request: Request, response: Response) => {
  const arriendos = await Arriendo.findAll();
  response.json({ data: arriendos });
};

//Mostrar Los arriendos activos
export const getArriendosActivos = async (request: Request, response: Response) => {
  response.json("Listar arriendos activos.");
};

//Mostrar los arriendos terminados
export const getArriendosTerminados = async (request: Request, response: Response) => {
  response.json("Listar arriendos terminados.");
};

//CREAR ARRIENDO NUEVO (Registrar un nuevo arriendo)
//Listoo
export const crearArriendo = async (request: Request, response: Response) => {
  const nuevoArriendo = await Arriendo.create(request.body);
  response.json({ data: nuevoArriendo });
};

//EDITAR ARRIENDO (Registar devolucion)
//Listo
export const editarArriendo = async (request: Request, response: Response) => {
  const { id } = request.params;
  const arriendo = await Arriendo.findByPk(id);
  await arriendo.update(request.body);
  await arriendo.save();
  response.json({ data: arriendo });
};

//Borrar Arriendo
//Listo
export const borrarArriendo = async (request: Request, response: Response) => {
  const { id } = request.params;
  const arriendo = await Arriendo.findByPk(id);
  await arriendo.destroy();
  response.json({ data: "Arriendo borrado" });
};
