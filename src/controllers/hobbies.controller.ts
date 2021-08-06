import { CreateHobbyDto } from "dtos/hobbies.dto";
import { NextFunction, Request, Response } from "express";
import { Hobby } from "interfaces/hobbies.interface";
import hobbyService from "../services/hobbies.service";

class HobbiesController {
  public hobbyService = new hobbyService();

  public getHobbies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const findAllHobbiesData: Hobby[] = await this.hobbyService.findAllHobbies();
      res.status(200).json({ data: findAllHobbiesData, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public getHobbyById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const hobbyId: string = req.params.id;

    try {
      const findOneHobbyData: Hobby = await this.hobbyService.findHobbyById(
        hobbyId
      );
      res.status(200).json({ data: findOneHobbyData, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public createHobby = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const hobbyData: CreateHobbyDto = req.body;

    try {
      const createHobbyData: Hobby = await this.hobbyService.createHobby(
        hobbyData
      );
      res.status(201).json({ data: createHobbyData, message: "created" });
    } catch (error) {
      next(error);
    }
  };

  public updateHobby = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const hobbyId: string = req.params.id;
    const hobbyData: Hobby = req.body;

    try {
      const updateHobbyData: Hobby = await this.hobbyService.updateHobby(
        hobbyId,
        hobbyData
      );
      res.status(200).json({ data: updateHobbyData, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  public deleteHobby = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const hobbyId: string = req.params.id;

    try {
      const deleteHobbyData: Hobby = await this.hobbyService.deleteHobbyData(
        hobbyId
      );
      res.status(200).json({ data: deleteHobbyData, message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

export default HobbiesController;
