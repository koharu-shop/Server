import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productService.getProduct(id);
  }

  @Get(':id/options')
  getProductOptions(@Param('id') id: number) {
    return this.productService.getProductOptions(id);
  }
}
