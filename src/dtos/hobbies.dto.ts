import { IsNumber, IsString } from "class-validator";

export class CreateHobbyDto {
  @IsString()
  public name: string;

  @IsString()
  public passionLevel: string;

  @IsNumber()
  public year: number;
}
