import HttpException from "../exceptions/HttpException";
import hobbyModel from "../models/hobbies.model";
import { Hobby } from "../interfaces/hobbies.interface";
import { CreateHobbyDto } from "../dtos/hobbies.dto";

class HobbyService {
  public hobbies = hobbyModel;

  public async findAllHobbies(): Promise<Hobby[]> {
    const hobbies = await this.hobbies.find();
    return hobbies;
  }

  public async findHobbyById(hobbyId: string): Promise<Hobby> {
    const hobby = await this.hobbies.findById(hobbyId);
    if (hobby) return hobby;
    throw new HttpException(409, "Invalid Hobby Id");
  }

  public async createHobby(hobbyData: CreateHobbyDto): Promise<Hobby> {
    const hobby = await this.hobbies.create(hobbyData);

    return hobby;
  }

  public async updateHobby(hobbyId: string, hobbyData: Hobby): Promise<Hobby> {
    const hobby = await this.hobbies.findByIdAndUpdate(hobbyId, hobbyData, {
      new: true,
    });
    if (hobby) return hobby;
    throw new HttpException(409, "Invalid Hobby Id");
  }

  public async deleteHobbyData(hobbyId: string): Promise<Hobby> {
    const hobby = await this.hobbies.findByIdAndDelete(hobbyId);
    if (hobby) return hobby;
    throw new HttpException(409, "Invalid Hobby Id");
  }
}

export default HobbyService;
