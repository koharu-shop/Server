import { Controller, Get, Logger, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  private logger = new Logger('CategoryController');

  constructor(private categoryService: CategoryService) {}

  @Get(':id')
  getProducts(@Param('id') id: number) {
    return this.categoryService.getProducts(id);
  }

  @Get()
  getCategories() {
    this.logger.verbose('get categories');
    return this.categoryService.getCategories();
  }
}
