import "dotenv/config";
import App from "./app";
import validateEnv from "./utils/validateEnv";
import IndexRoute from "./routes/index.route";
import UsersRoute from "./routes/users.route";
import HobbiesRoute from "./routes/hobbies.route";

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new HobbiesRoute()]);

app.listen();
