import { cleanEnv, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    MONGO_CONNECTION_STRING: str(),
  });
}

export default validateEnv;
