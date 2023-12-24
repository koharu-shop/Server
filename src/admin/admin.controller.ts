import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ProductService } from 'src/product/product.service';
import { CreateCategoryDto } from 'src/product/dto/product.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private adminService: AdminService,
    private productService: ProductService,
  ) {}

  @Post('category')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.productService.addCategory(createCategoryDto);
  }
}
