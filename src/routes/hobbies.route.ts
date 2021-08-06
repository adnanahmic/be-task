import HobbiesController from "../controllers/hobbies.controller";
import { Router } from "express";
import Route from "../interfaces/routes.interface";
import validationMiddleware from "../middlewares/validation.middleware";
import validationJsonResponseMiddleware from "../middlewares/validationJsonResponse.middleware";
import { CreateHobbyDto } from "../dtos/hobbies.dto";

class HobbiesRoute implements Route {
  public path = "/hobby";
  public router = Router();
  public hobbiesController = new HobbiesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.hobbiesController.getHobbies);
    this.router.get(`${this.path}/:id`, this.hobbiesController.getHobbyById);
    this.router.post(
      `${this.path}`,
      validationJsonResponseMiddleware(CreateHobbyDto),
      this.hobbiesController.createHobby
    );
    this.router.put(
      `${this.path}/:id`,
      validationMiddleware(CreateHobbyDto, true),
      this.hobbiesController.updateHobby
    );
    this.router.delete(`${this.path}/:id`, this.hobbiesController.deleteHobby);
  }
}

export default HobbiesRoute;
