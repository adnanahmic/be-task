import { IsArray, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  public name: string;

  @IsArray()
  public hobbies: string[];
}
