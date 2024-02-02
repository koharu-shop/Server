import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async getProduct(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: id },
    });

    return product;
  }

  async getProductOptions(id: number) {
    const options = await this.prismaService.productOption.findMany({
      where: {
        productId: id,
      },
    });
    return options;
  }
}
