import * as swaggerUi from "swagger-ui-express";
import * as swaggerJSDoc from "swagger-jsdoc";
import { Application } from "express";

function swaggerIgnite(applicationInstance: Application) {
  const swaggerDefinition = {
    info: {
      title: "REST API for test task",
      version: "1.0.0",
      description: "This is the REST API for my test task",
    },
    host: "localhost:3000",
    basePath: "/",
  };

  const options = {
    swaggerDefinition,
    apis: ["./src/swagger-docs/**/*.yaml"],
  };
  const swaggerSpec = swaggerJSDoc(options);

  applicationInstance.use(
    "/api",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );
}

export default swaggerIgnite;
