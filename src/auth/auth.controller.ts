import { Body, Controller, Post, UseGuards, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { RefreshJwtGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async registerUser(@Body() dto: LoginDto, @Res({ passthrough: true }) response: Response) {
    const { accessToken, refreshToken } = await this.authService.login(dto);
    // response.cookie('accessToken', accessToken, { httpOnly: true });
    // response.cookie('refreshToken', refreshToken, { httpOnly: true });

    return {
      message: 'login success',
      accessToken,
      refreshToken,
    };
  }

  // @UseGuards(RefreshJwtGuard)
  // @Post('refresh')
  // async refreshToken(@Request() req) {
  //   console.log('refreshed');

  //   return await this.authService.refreshToken(req.user);
  // }
}
