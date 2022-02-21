import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class JwtSignupDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    jwtToken: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string 
}