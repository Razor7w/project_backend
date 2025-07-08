import Express from "express";
import router from "./router";
import db from "./config/database";
import cors, { CorsOptions } from "cors";

const server = Express();

//Conectando a la Base de Datos
async function conectarBD() {
  try {
    await db.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
    await db.sync();
    console.log("Tablas sincronizadas con la base de datos.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos o sincronizar las tablas:", error);
    process.exit(1);
  }
}

conectarBD();

const CorsOptions: CorsOptions = {
  origin: true, // permite cualquier origen
};

server.use(cors(CorsOptions));

server.use(Express.json());

server.use("/api", router);

export default server;
