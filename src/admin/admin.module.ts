import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PrismaService } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, PrismaService, ProductService],
})
export class AdminModule {}
