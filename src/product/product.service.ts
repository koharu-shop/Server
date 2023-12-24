import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async addCategory(dto: CreateCategoryDto) {
    const newCategory = await this.prismaService.category.create({
      data: {
        ...dto,
      },
    });

    return newCategory;
  }
}
