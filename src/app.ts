import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as hpp from "hpp";
import * as mongoose from "mongoose";
import * as logger from "morgan";
import Routes from "./interfaces/routes.interface";
import swaggerIgnite from "./utils/swaggerIgnite";

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initSwaggerDocs();
    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  public initSwaggerDocs() {
    swaggerIgnite(this.app);
  }

  private initializeMiddlewares() {
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(logger("dev"));
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private connectToDatabase() {
    const { MONGO_CONNECTION_STRING } = process.env;
    const options = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    mongoose.connect(MONGO_CONNECTION_STRING, { ...options });
  }
}

export default App;
