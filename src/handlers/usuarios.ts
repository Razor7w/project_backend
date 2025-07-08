import { Request, Response } from "express";
import Usuario from "../models/Usuario";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const CrearUsuario = async (request: Request, response: Response) => {
  const { correo, contrasena } = request.body;

  if (!correo || !contrasena) {
    response.json({ mensaje: "Email y password son obligatorios." });
  }

  if (contrasena.length < 6) {
    response.json("La contraseña debe tener al menos 6 caracteres.");
  }

  const usuarioExistente = await Usuario.findByPk(correo);
  if (usuarioExistente) {
    response.json("El usuario ya existe.");
  }

  const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

  await Usuario.create({ correo, contrasena: hashedPassword });
  response.json("Usuario creado correctamente");

};

export const InicioSesion = async (request: Request, response: Response) => {
  const { correo, contrasena } = request.body;

  if (!correo || !contrasena) {
    response.json({ mensaje: "Email y password son obligatorios." });
  }

  const usuario = await Usuario.findByPk(correo);

  if (!usuario) {
    response.json({ mensaje: "Usuario no encontrado." });
  }

  const passwordValida = await bcrypt.compare(contrasena, usuario.contrasena);

  if (!passwordValida) {
    response.json({ mensaje: "Contraseña incorrecta." });
  }

  response.json({ mensaje: "Inicio de sesión exitoso." });
}


export const CambiarContrasena = async (request: Request, response: Response) => {
  const { correo, contrasenaAnterior, nuevacontrasena } = request.body;
  

  if (!correo || !contrasenaAnterior || !nuevacontrasena) {
    response.json({ mensaje: "Faltan campos obligatorios." });
  }
  const usuario = await Usuario.findByPk(correo);

  if (!usuario) {
    response.json({ mensaje: "Usuario no encontrado." });
  }

  const coincide = await bcrypt.compare(contrasenaAnterior, usuario.contrasena);
  if (!coincide) {
    response.json({ mensaje: "Contraseña anterior incorrecta." });
  }

  if (nuevacontrasena.length < 6) {
    response.json("La nueva contraseña debe tener al menos 6 caracteres.");
  }
  const hashedPassword = await bcrypt.hash(nuevacontrasena, saltRounds);
  usuario.contrasena = hashedPassword;
  await usuario.save();

  response.json({ mensaje: "Contraseña actualizada correctamente." });
};
