import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  UnauthorizedException,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { ProductService } from 'src/product/product.service';
import { CreateCategoryDto } from 'src/product/dto/product.dto';
import { UserService } from 'src/user/user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('admin')
export class AdminController {
  constructor(
    private adminService: AdminService,
    private productService: ProductService,
    private userService: UserService,
  ) {}

  private checkAdminRole(@Request() req) {
    if (req.user.role !== 'admin') {
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

  @UseGuards(JwtGuard)
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return callback(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFiles() files: Express.Multer.File[], @Request() req) {
    // console.log(files);
    this.checkAdminRole(req);
    return { message: 'File upload successful' };
  }
}
