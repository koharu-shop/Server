import { Injectable } from '@nestjs/common';
// import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async login(dto: CreateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user) return;

    const newUser = await this.prismaService.user.create({
      data: {
        ...dto,
      },
    });

    return newUser;
  }
}
