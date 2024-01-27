import { IsNumber, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  engName: string;

  @IsString()
  displayOption: 'Y' | 'N';

  @IsNumber()
  order: number;
}
