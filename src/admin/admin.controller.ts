import { Body, Controller, Get, Post, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ProductService } from 'src/product/product.service';
import { CreateCategoryDto } from 'src/product/dto/product.dto';
import { UserService } from 'src/user/user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('admin')
export class AdminController {
  constructor(
    private adminService: AdminService,
    private productService: ProductService,
    private userService: UserService,
  ) {}

  private checkAdminRole(@Request() req) {
    if (req.user.role !== 'ADMIN') {
      throw new UnauthorizedException();
    }
  }

  @UseGuards(JwtGuard)
  @Post('category')
  create(@Body() createCategoryDto: CreateCategoryDto, @Request() req) {
    this.checkAdminRole(req);
    return this.productService.addCategory(createCategoryDto);
  }

  @UseGuards(JwtGuard)
  @Get('users')
  getAllUser(@Request() req) {
    this.checkAdminRole(req);
    return this.userService.getAllUser();
  }
}
