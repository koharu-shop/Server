import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  memberId: number;

  @IsString()
  subject: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsNumber()
  score: number;

  @IsOptional()
  @IsString()
  img1?: string;

  @IsOptional()
  @IsString()
  img2?: string;

  @IsOptional()
  @IsString()
  img3?: string;
}
