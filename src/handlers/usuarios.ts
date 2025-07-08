import { Request, Response } from "express";

export const usuario = async (request: Request, response: Response) => {
  response.json("Registro de Usuarios");
};

export const login = async (request: Request, response: Response) => {
  response.json("Inicio de Sesion de Usuarios");
};

export const logout = async (request: Request, response: Response) => {
  response.json("Cierre de Sesion de Usuarios");
};

export const password = async (request: Request, response: Response) => {
  response.json("Cambio de Contraseña");
};
