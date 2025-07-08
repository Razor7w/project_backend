import { Request, Response } from "express";
import Arriendo from "../models/Arriendo";
import { col, fn, Op, Sequelize } from "sequelize";

//Mostrar todos los arriendos
export const getArriendos = async (request: Request, response: Response) => {
  const arriendos = await Arriendo.findAll();
  response.json({ data: arriendos });
};

export const getTotalesPorTipoDeVehiculo = async (req: Request, res: Response) => {

  const resultados = await Arriendo.findAll({
      attributes: [
        [col("tipo_vehiculo"), "tipoVehiculo"],
        [fn("COUNT", col("tipo_vehiculo")), "cantidad"]
      ],
      group: [col("tipo_vehiculo")]
    });

  res.json({ data: resultados });

};

//Mostrar Los arriendos activos
export const getArriendosActivos = async (request: Request, response: Response) => {
    const arriendos = await Arriendo.findAll({
      where: {
        fechaFin: null,
      },
    });

    response.json({ data: arriendos });
};

//Mostrar los arriendos terminados
export const getArriendosTerminados = async (request: Request, response: Response) => {
   const arriendos = await Arriendo.findAll({
      where: {
        fechaFin: {
          [Op.not]: null,
        },
      },
    });

    response.json({ data: arriendos });
};

//CREAR ARRIENDO NUEVO (Registrar un nuevo arriendo)
//Listoo
export const crearArriendo = async (request: Request, response: Response) => {
   const { nombreCliente, patenteVehiculo, rutCliente, tipoVehiculo } = request.body;

    if (!nombreCliente || !patenteVehiculo || !rutCliente || !tipoVehiculo) {
    response.json({ mensaje: "Los campos son obligatorios." });
  }
  const nuevoArriendo = await Arriendo.create(request.body);
  response.json({ data: nuevoArriendo });
};

//EDITAR ARRIENDO (Registar devolucion)
//Listo
export const editarArriendo = async (request: Request, response: Response) => {
  const { id } = request.params;
  const arriendo = await Arriendo.findByPk(id);
  arriendo.fechaFin = new Date();
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
