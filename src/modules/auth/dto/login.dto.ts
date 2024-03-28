import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public password: string;

}


