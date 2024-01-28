import * as dotenv from "dotenv";
import * as nodepath from "path";

dotenv.config();

const basedir = nodepath.dirname(require.main.filename);

let path: string;
switch (process.env.NODE_ENV) {
  case "test":
    path = `${basedir}/../.env.test`;
    break;
  case "production":
    path = `${basedir}/../.env.production`;
    break;
  default:
    path = `${basedir}/../.env.development`;
}

dotenv.config({ path });

export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const SECRET_KEY = process.env.SECRET_KEY;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = process.env.DATABASE_PORT;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_DIALECT = process.env.DATABASE_DIALECT;
export const DATABASE_EXPOSE_PORT = process.env.DATABASE_EXPOSE_PORT;
