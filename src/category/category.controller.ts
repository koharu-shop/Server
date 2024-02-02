import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get(':id')
  getProducts(@Param('id') id: number) {
    return this.categoryService.getProducts(id);
  }

  @Get()
  getCategories() {
    return this.categoryService.getCategories();
  }
}
