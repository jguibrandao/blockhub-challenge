import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SigninDto {
    @ApiProperty({
        description: "An string type Email, with the correct synthax and not empty",
        example: "jguibrandao@gmail.com"
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "A string type password, with 4 or more characters",
        example: "jguibrandao123"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    password: string
}