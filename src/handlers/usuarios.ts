import { Request, Response } from "express";

export const CrearUsuario = async (request: Request, response: Response) => {
  response.json("Registro de Usuarios");
};

export const InicioSesion = async (request: Request, response: Response) => {
  response.json("Inicio de Sesion de Usuarios");
};

export const CerrarSesion = async (request: Request, response: Response) => {
  response.json("Cierre de Sesion de Usuarios");
};

export const CambiarContrasena = async (request: Request, response: Response) => {
  response.json("Cambio de Contraseña");
};
