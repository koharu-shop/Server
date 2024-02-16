import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}
  async getCategories() {
    const categories = await this.prismaService.category.findMany();
    return categories;
  }
}
