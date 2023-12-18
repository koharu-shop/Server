import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsString()
  phone?: string;

  @IsString()
  addr?: string;

  @IsNumber()
  point?: number;
}
