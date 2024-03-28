import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from "../user/entities/user.entity";
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/common/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtAuthGuard
  ],
  exports: [JwtModule]
})
export class AuthModule {}
