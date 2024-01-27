import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  engName: string;

  @IsString()
  use: 'Y' | 'N';
}
