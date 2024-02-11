import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');

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
    this.logger.verbose('리프레쉬 토큰 재발급');
    return await this.authService.refreshToken(refreshToken);
  }
}
