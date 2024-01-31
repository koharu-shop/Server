import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async getCategory() {
    const category = await this.prismaService.category.findMany();

    return category;
  }
}
