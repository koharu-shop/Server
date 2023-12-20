import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateUserDto) {
    const newUser = await this.prismaService.user.create({
      data: {
        ...dto,
      },
    });
    return newUser;
  }
}
