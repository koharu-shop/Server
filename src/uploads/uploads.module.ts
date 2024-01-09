import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UploadsController],
  providers: [JwtService],
})
export class UploadsModule {}
