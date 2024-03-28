import { PartialType } from '@nestjs/mapped-types';
import { LoginDto } from "./login.dto";
import { Exclude } from "class-transformer";

export class UserResponseDto extends PartialType(LoginDto) {
  @Exclude()
  password: string

  token: string
}