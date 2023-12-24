import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional() // 있을 수도 있고 없을 수도 있음
  description: string;
}
