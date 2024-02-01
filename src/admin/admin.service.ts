import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto, CreateProductDto, CreateProductOptionDto } from './dto/product.dto';

@Injectable()
export class AdminService {
  constructor(private prismaService: PrismaService) {}

  async addCategory(dto: CreateCategoryDto) {
    try {
      const newCategory = await this.prismaService.category.create({
        data: {
          ...dto,
        },
      });

      return newCategory;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new NotFoundException('이미 해당 값이 존재하는 카테고리입니다.');
      } else {
        console.log(error, 'error');
        // You may want to handle other types of errors differently
        throw new Error('An unexpected error occurred.');
      }
    }
  }

  async addProduct(dto: CreateProductDto) {
    try {
      const newProduct = await this.prismaService.product.create({
        data: { ...dto },
      });

      return newProduct;
    } catch (error) {
      console.log(error);

      throw new Error('An unexpected error occurred.');
    }
  }

  async addProductOption(dto: CreateProductOptionDto) {
    try {
      const newProductOption = await this.prismaService.productOption.create({
        data: {
          ...dto,
        },
      });

      return newProductOption;
    } catch (error) {
      throw new Error(error);
    }
  }
}
