import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';

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

  @Post('refresh')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return await this.authService.refreshToken(refreshToken);
  }
}
