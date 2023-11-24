import { Sequelize } from "sequelize";
import { CONFIG } from "../config";

const { dbUserName, dbPassword, dbHost, dbPort, dbName } = CONFIG;
const connString = `postgres://${dbUserName}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

export let sequelize = new Sequelize(connString);
