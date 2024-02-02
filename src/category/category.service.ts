import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}
  async getCategories() {
    const categories = await this.prismaService.category.findMany();
    return categories;
  }

  async getProducts(id: number) {
    const products = await this.prismaService.product.findMany({
      where: {
        categoryId: id,
      },
      select: {
        id: true,
        name: true,
        img1: true,
        price: true,
        sale: true,
        type4: true,
      },
    });
    return products;
  }
}
