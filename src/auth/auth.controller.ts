import { Body, Controller, Post, UseGuards, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { RefreshJwtGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async registerUser(@Body() dto: LoginDto) {
    const { accessToken, refreshToken, role } = await this.authService.login(dto);

    return {
      message: 'login success',
      accessToken,
      refreshToken,
      role,
    };
  }

  // @UseGuards(RefreshJwtGuard)
  // @Post('refresh')
  // async refreshToken(@Request() req) {
  //   console.log('refreshed');

  //   return await this.authService.refreshToken(req.user);
  // }
}
