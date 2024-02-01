import { IsNumber, IsString, IsOptional, IsInt, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

type YNEnum = 'Y' | 'N';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  engName: string;

  @IsString()
  displayOption: YNEnum;

  @IsNumber()
  order: number;
}

export class CreateProductDto {
  @IsString()
  name: string;

  @IsInt()
  categoryId: number;

  @IsString()
  content: string;

  @IsNumber()
  price: number;

  @IsNumber()
  sale: number;

  @IsNumber()
  count: number;

  @IsString()
  seoTitle: string;

  @IsNumber()
  buyMinCount: number;

  @IsNumber()
  buyMaxCount: number;

  @IsString()
  img1: string;

  @IsOptional()
  @IsString()
  img2?: string;

  @IsOptional()
  @IsString()
  img3?: string;

  @IsOptional()
  @IsString()
  img4?: string;

  @IsOptional()
  @IsString()
  img5?: string;

  @IsOptional()
  @IsString()
  deleted?: YNEnum;

  @IsString()
  displayOption: YNEnum;

  @IsString()
  @Transform(({ value }) => (value === 'true' || value === true ? 'Y' : 'N'))
  type1: YNEnum;

  @IsString()
  @Transform(({ value }) => (value === 'true' || value === true ? 'Y' : 'N'))
  type2: YNEnum;

  @IsString()
  @Transform(({ value }) => (value === 'true' || value === true ? 'Y' : 'N'))
  type3: YNEnum;

  @IsString()
  @Transform(({ value }) => (value === 'true' || value === true ? 'Y' : 'N'))
  type4: YNEnum;

  @IsOptional()
  @IsString()
  optionSubject?: string;

  @IsOptional()
  @IsString()
  supplySubject?: string;
}

export class CreateProductOptionDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  count: number;

  @IsNumber()
  price: number;

  @IsNumber()
  type: number;

  @IsString()
  displayOption: YNEnum;

  @IsString()
  name: string;
}
